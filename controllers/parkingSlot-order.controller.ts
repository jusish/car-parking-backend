import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import { ParkingSlotStatus } from "../types";
import sendMail from "../utils/emailUtility";
import { ParkingSlotOrderStatus } from "../generated/prisma";

export class ParkingSlotOrderController {
  static async createParkingSlotOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { slotId, vehiclePlateNumber } = req.body;
      
      // Check if required fields are present
      if (!slotId || !vehiclePlateNumber) {
        return ServerResponse.error(res, "Missing required fields: slotId or vehiclePlateNumber");
      }

      const user = await prisma.user.findUnique({
        where: { id: req.user?.id as string },
      });

      if (!user) {
        return ServerResponse.notFound(res, "User not found");
      }

      // Find parking slot using slotId from request body (not parkingSlotId)
      const parkingSlot = await prisma.parkingSlot.findUnique({
        where: { id: slotId },
        include: { parking: true },
      });

      if (!parkingSlot) {
        return ServerResponse.notFound(res, "ParkingSlot not found");
      }

      const vehicle = await prisma.vehicle.findUnique({
        where: { vehiclePlateNumber: vehiclePlateNumber },
      });

      if (!vehicle) {
        return ServerResponse.notFound(res, "Vehicle not found");
      }

      const parkingSlotOrder = await prisma.parkingSlotOrder.create({
        data: {
          parkingSlotCustomerId: req.user?.id,
          parkingSlotId: slotId, // Use slotId from request body
          parkingSlotVehicleId: vehicle.id,
          vehicleId: vehicle.id,
          pricePerHour: parkingSlot.parking.pricePerHour,
          hours: 0,
        },
      });

      await prisma.parkingSlot.update({
        where: { id: slotId }, // Use slotId from request body
        data: {
          parkingSlotStatus: ParkingSlotStatus.OCCUPIED,
        },
      });

      await sendMail(
        {
          name: user?.firstName + " " + user?.lastName,
          orderId: parkingSlotOrder.id,
          totalAmount: parkingSlotOrder.pricePerHour * parkingSlotOrder.hours,
        },
        user?.email as string,
        "ParkingSlot Order Confirmation",
        "parkingSlot-request-confirmation"
      );

      ServerResponse.success(
        res,
        "ParkingSlot order created successfully",
        parkingSlotOrder
      );
    } catch (error) {
      next(error);
    }
  }

  static async getParkingSlotOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    try {
      const parkingSlotOrders = await prisma.parkingSlotOrder.findMany({
        skip,
        take: limitNumber,
        include: {
          parkingSlot: {
            include: { parking: true },
          },
          parkingSlotVehicle: true,
        },
        orderBy: { createdAt: "desc" },
      });
      const total = await prisma.parkingSlotOrder.count({
        where: { parkingSlotCustomerId: req.user?.id as string },
      });
      ServerResponse.successWithPagination(
        res,
        "ParkingSlot orders fetched successfully",
        parkingSlotOrders,
        total,
        pageNumber,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }

  static async getParkingSlotOrderById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const parkingSlotOrder = await prisma.parkingSlotOrder.findUnique({
        where: { id },
        include: {
          parkingSlot: {
            include: { parking: true },
          },
          parkingSlotVehicle: true,
        },
      });
      if (!parkingSlotOrder) {
        ServerResponse.notFound(res, "ParkingSlot order not found");
        return;
      }
      ServerResponse.success(
        res,
        "ParkingSlot order fetched successfully",
        parkingSlotOrder
      );
    } catch (error) {
      next(error);
    }
  }

  static async deleteParkingSlotOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      await prisma.parkingSlotOrder.delete({
        where: { id },
      });
      ServerResponse.success(res, "ParkingSlot order deleted successfully");
    } catch (error) {
      next(error);
    }
  }

  static async updateParkingSlotOrderStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const parkingSlotOrder = await prisma.parkingSlotOrder.findUnique({
        where: { id },
      });
      if (!parkingSlotOrder) {
        ServerResponse.notFound(res, "ParkingSlot order not found");
        return;
      }
      const hours =
        new Date().getHours() - new Date(parkingSlotOrder.createdAt).getHours();
      const parkingSlotOrderUpdated = await prisma.parkingSlotOrder.update({
        where: { id },
        data: {
          parkingSlotOrderStatus: status,
          hours,
        },
      });
      await prisma.parkingSlot.update({
        where: { id: parkingSlotOrder.parkingSlotId },
        data: {
          parkingSlotStatus:
            status === ParkingSlotOrderStatus.COMPLETED
              ? ParkingSlotStatus.AVAILABLE
              : ParkingSlotStatus.OCCUPIED,
        },
      });
      ServerResponse.success(
        res,
        "ParkingSlot order status updated successfully",
        parkingSlotOrderUpdated
      );
    } catch (error) {
      next(error);
    }
  }

  static async getParkingSlotOrdersByParkingSlotId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    try {
      const parkingSlotOrders = await prisma.parkingSlotOrder.findMany({
        where: { parkingSlotId: id },
        skip,
        take: limitNumber,
        include: {
          parkingSlot: {
            include: { parking: true },
          },
          parkingSlotVehicle: true,
        },
        orderBy: { createdAt: "desc" },
      });
      const total = await prisma.parkingSlotOrder.count({
        where: { parkingSlotId: id },
      });
      ServerResponse.successWithPagination(
        res,
        "ParkingSlot orders fetched successfully",
        parkingSlotOrders,
        total,
        pageNumber,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }

  static async getParkingSlotOrdersByParkingSlotCustomerId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { page, limit } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
      const parkingSlotOrders = await prisma.parkingSlotOrder.findMany({
        where: { parkingSlotCustomerId: id },
        skip,
        take: limitNumber,
        include: {
          parkingSlot: {
            include: { parking: true },
          },
          parkingSlotVehicle: true,
        },
        orderBy: { createdAt: "desc" },
      });
      const total = await prisma.parkingSlotOrder.count({
        where: { parkingSlotCustomerId: id },
      });
      ServerResponse.successWithPagination(
        res,
        "ParkingSlot orders fetched successfully",
        parkingSlotOrders,
        total,
        pageNumber,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }
}