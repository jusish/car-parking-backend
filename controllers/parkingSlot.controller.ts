import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import { ParkingSlotSize, ParkingSlotStatus } from "../types";
import { ParkingSlotUtility } from "../utils";

export class ParkingSlotController {
  public static async createParkingSlot(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { parkingId, parkingSlotSize } = req.body;
      const parking = await prisma.parking.findUnique({
        where: { id: parkingId },
      });
      if (!parking) {
        ServerResponse.notFound(res, "Parking not found");
        return;
      }
      const currentSlots = await prisma.parkingSlot.count({
        where: { parkingId },
      });
      if (currentSlots >= parking.maxSlots) {
        ServerResponse.error(
          res,
          "Maximum slots limit reached for this parking"
        );
        return;
      }
      const parkingSlot = await prisma.parkingSlot.create({
        data: {
          parkingId,
          parkingSlotSize,
          parkingSlotNumber:
            await ParkingSlotUtility.generateParkingSlotNumbers(),
        },
      });
      ServerResponse.success(
        res,
        "ParkingSlot created successfully",
        parkingSlot
      );
    } catch (error) {
      next(error);
    }
  }

  public static async createManyParkingSlots(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { parkingId, numberOfParkingSlots, parkingSlotSize } = req.body;
      const parking = await prisma.parking.findUnique({
        where: { id: parkingId },
      });
      if (!parking) {
        ServerResponse.notFound(res, "Parking not found");
        return;
      }
      const currentSlots = await prisma.parkingSlot.count({
        where: { parkingId },
      });
      if (currentSlots + numberOfParkingSlots > parking.maxSlots) {
        ServerResponse.error(res, "Requested slots exceed maximum slots limit");
        return;
      }
      const parkingSlots =
        await ParkingSlotUtility.generateManyParkingSlotNumbers(
          numberOfParkingSlots
        );
      const createdParkingSlots = await prisma.parkingSlot.createMany({
        data: parkingSlots.map((parkingSlotNumber) => ({
          parkingId,
          parkingSlotNumber,
          parkingSlotSize,
        })),
      });
      ServerResponse.success(
        res,
        "ParkingSlots created successfully",
        createdParkingSlots
      );
    } catch (error) {
      next(error);
    }
  }

  public static async getParkingSlots(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {
        page,
        limit,
        search,
        parkingSlotSize,
        parkingSlotStatus,
        parkingId,
      } = req.query;

      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;

      const filters: any = {};

      if (search) {
        filters.parkingSlotNumber = {
          contains: search.toString().trim() as string,
          mode: "insensitive",
        };
      }

      if (parkingSlotSize) {
        filters.parkingSlotSize = parkingSlotSize as ParkingSlotSize;
      }

      if (parkingSlotStatus) {
        filters.parkingSlotStatus = parkingSlotStatus as ParkingSlotStatus;
      }

      if (parkingId) {
        filters.parkingId = parkingId as string;
      }

      const [parkingSlots, total] = await Promise.all([
        prisma.parkingSlot.findMany({
          where: filters,
          skip,
          take: limitNumber,
          orderBy: {
            parkingSlotNumber: "asc",
          },
          include: { parking: true },
        }),
        prisma.parkingSlot.count({
          where: filters,
        }),
      ]);

      ServerResponse.successWithPagination(
        res,
        "ParkingSlots fetched successfully",
        parkingSlots,
        total,
        pageNumber,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }

  public static async getParkingSlotById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const parkingSlot = await prisma.parkingSlot.findUnique({
        where: { id },
        include: { parking: true },
      });

      if (!parkingSlot) {
        ServerResponse.notFound(res, "ParkingSlot not found");
        return;
      }
      ServerResponse.success(
        res,
        "ParkingSlot fetched successfully",
        parkingSlot
      );
    } catch (error) {
      next(error);
    }
  }

  public static async updateParkingSlot(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { parkingId, parkingSlotSize, parkingSlotStatus } = req.body;

      if (parkingId) {
        const parking = await prisma.parking.findUnique({
          where: { id: parkingId },
        });
        if (!parking) {
          ServerResponse.notFound(res, "Parking not found");
          return;
        }
      }

      const parkingSlot = await prisma.parkingSlot.update({
        where: { id },
        data: { parkingId, parkingSlotSize, parkingSlotStatus },
      });
      ServerResponse.success(
        res,
        "ParkingSlot updated successfully",
        parkingSlot
      );
    } catch (error) {
      next(error);
    }
  }

  public static async deleteParkingSlot(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      await prisma.parkingSlot.delete({
        where: { id },
      });
      ServerResponse.success(res, "ParkingSlot deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}
