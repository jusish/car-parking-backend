/*
  Warnings:

  - You are about to drop the `ParkingSlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParkingSlotOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "parking_category" AS ENUM ('STANDARD', 'PREMIUM', 'VIP', 'DISABLED');

-- DropForeignKey
ALTER TABLE "ParkingSlotOrder" DROP CONSTRAINT "ParkingSlotOrder_parkingSlotCustomerId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingSlotOrder" DROP CONSTRAINT "ParkingSlotOrder_parkingSlotId_fkey";

-- DropForeignKey
ALTER TABLE "ParkingSlotOrder" DROP CONSTRAINT "ParkingSlotOrder_parkingSlotVehicleId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleOwnerId_fkey";

-- DropTable
DROP TABLE "ParkingSlot";

-- DropTable
DROP TABLE "ParkingSlotOrder";

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "vehiclePlateNumber" TEXT NOT NULL,
    "vehicleType" "vehicle_type" NOT NULL DEFAULT 'CAR',
    "vehicleColor" TEXT NOT NULL,
    "vehicleBrand" TEXT NOT NULL,
    "vehicleModel" TEXT NOT NULL,
    "vehicleYear" INTEGER NOT NULL,
    "vehicleOwnerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parkings" (
    "id" TEXT NOT NULL,
    "maxSlots" INTEGER NOT NULL,
    "slotCategory" "parking_category" NOT NULL,
    "pricePerHour" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parkings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking_slots" (
    "id" TEXT NOT NULL,
    "parkingId" TEXT NOT NULL,
    "parkingSlotNumber" TEXT NOT NULL,
    "parkingSlotSize" "parkingSlot_size" NOT NULL DEFAULT 'SMALL',
    "parkingSlotStatus" "parkingSlot_status" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parking_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parking_slot_orders" (
    "id" TEXT NOT NULL,
    "parkingSlotId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "parkingSlotCustomerId" TEXT,
    "parkingSlotVehicleId" TEXT,
    "pricePerHour" DOUBLE PRECISION NOT NULL,
    "hours" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parkingSlotOrderStatus" "parkingSlot_order_status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "parking_slot_orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_vehiclePlateNumber_key" ON "vehicles"("vehiclePlateNumber");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_vehicleOwnerId_fkey" FOREIGN KEY ("vehicleOwnerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_slots" ADD CONSTRAINT "parking_slots_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parkings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_slot_orders" ADD CONSTRAINT "parking_slot_orders_parkingSlotId_fkey" FOREIGN KEY ("parkingSlotId") REFERENCES "parking_slots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_slot_orders" ADD CONSTRAINT "parking_slot_orders_parkingSlotCustomerId_fkey" FOREIGN KEY ("parkingSlotCustomerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parking_slot_orders" ADD CONSTRAINT "parking_slot_orders_parkingSlotVehicleId_fkey" FOREIGN KEY ("parkingSlotVehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
