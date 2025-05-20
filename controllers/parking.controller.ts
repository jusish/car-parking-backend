import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import { ParkingSlotSize } from "../types";

export class ParkingController {
  public static async createParking(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { maxSlots, slotCategory, pricePerHour } = req.body;
      const parking = await prisma.parking.create({
        data: {
          maxSlots,
          slotCategory,
          pricePerHour,
        },
      });
      ServerResponse.success(res, "Parking created successfully", parking);
    } catch (error) {
      next(error);
    }
  }

  public static async getParkings(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { page, limit, slotCategory } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;

      const filters: any = {};
      if (slotCategory) {
        filters.slotCategory = slotCategory as ParkingSlotSize;
      }

      const [parkings, total] = await Promise.all([
        prisma.parking.findMany({
          where: filters,
          skip,
          take: limitNumber,
          orderBy: { createdAt: "desc" },
          include: { parkingSlots: true },
        }),
        prisma.parking.count({ where: filters }),
      ]);

      ServerResponse.successWithPagination(
        res,
        "Parkings fetched successfully",
        parkings,
        total,
        pageNumber,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }

  public static async getParkingById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const parking = await prisma.parking.findUnique({
        where: { id },
        include: { parkingSlots: true },
      });

      if (!parking) {
        ServerResponse.notFound(res, "Parking not found");
        return;
      }
      ServerResponse.success(res, "Parking fetched successfully", parking);
    } catch (error) {
      next(error);
    }
  }

  public static async updateParking(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { maxSlots, slotCategory, pricePerHour } = req.body;
      const parking = await prisma.parking.update({
        where: { id },
        data: { maxSlots, slotCategory, pricePerHour },
      });
      ServerResponse.success(res, "Parking updated successfully", parking);
    } catch (error) {
      next(error);
    }
  }

  public static async deleteParking(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      await prisma.parking.delete({
        where: { id },
      });
      ServerResponse.success(res, "Parking deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}