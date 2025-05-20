import { Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "./ServerResponse";

export class ParkingSlotUtility {
  public static async generateParkingSlotNumbers() {
    const lastParkingSlotNumber = await prisma.parkingSlot.findFirst({
      orderBy: {
        parkingSlotNumber: "desc",
      },
    });

    const lastParkingSlotNumberInt =
      lastParkingSlotNumber?.parkingSlotNumber || "SLOT000";
    const newParkingSlotNumber = `SLOT${(
      parseInt(lastParkingSlotNumberInt.slice(4)) + 1
    )
      .toString()
      .padStart(3, "0")}`;

    return newParkingSlotNumber;
  }

  public static async generateManyParkingSlotNumbers(
    numberOfParkingSlots: number
  ) {
    const lastParkingSlotNumber = await prisma.parkingSlot.findFirst({
      orderBy: {
        parkingSlotNumber: "desc",
      },
    });

    const lastNumber = parseInt(
      lastParkingSlotNumber?.parkingSlotNumber?.slice(4) || "0"
    );

    const parkingSlotNumbers: string[] = [];

    for (let i = 1; i <= numberOfParkingSlots; i++) {
      const parkingSlotNumber = `SLOT${(lastNumber + i)
        .toString()
        .padStart(3, "0")}`;
      parkingSlotNumbers.push(parkingSlotNumber);
    }

    return parkingSlotNumbers;
  }
}

export class ParkingSlotOrderUtility {
  public static async checkWhetherVehicleAndParkingSlotSizeMatch(
    res: Response,
    vehicleId: string,
    parkingSlotId: string
  ) {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: vehicleId,
      },
    });
    if (!vehicle) {
      ServerResponse.notFound(res, "Vehicle not found");
      return;
    }
    const parkingSlot = await prisma.parkingSlot.findUnique({
      where: {
        id: parkingSlotId,
      },
    });
    if (!parkingSlot) {
      ServerResponse.notFound(res, "ParkingSlot not found");
      return;
    }
    if (
      vehicle.vehicleType == "BIKE" &&
      parkingSlot.parkingSlotSize == "SMALL"
    ) {
      return true;
    }
    if (
      vehicle.vehicleType == "CAR" &&
      parkingSlot.parkingSlotSize == "MEDIUM"
    ) {
      return true;
    }
    if (
      vehicle.vehicleType == "TRUCK" &&
      parkingSlot.parkingSlotSize == "LARGE"
    ) {
      return true;
    }
    if (
      vehicle.vehicleType == "BUS" &&
      parkingSlot.parkingSlotSize == "LARGE"
    ) {
      return true;
    }
    ServerResponse.error(res, "Vehicle and parkingSlot size do not match");
    return;
  }
}
