import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum ParkingSlotStatus {
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  MAINTENANCE = "MAINTENANCE",
  RESERVED = "RESERVED",
}
enum ParkingSlotSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export class CreateManyParkingSlotDto {
  @IsNotEmpty()
  @IsNumber()
  numberOfParkingSlots: number;
  @IsNotEmpty()
  @IsEnum(ParkingSlotSize)
  size: ParkingSlotSize;
}

export class UpdateParkingSlotDto {
  @IsEnum(ParkingSlotStatus)
  parkingSlotStatus: string;
  @IsString()
  parkingSlotCustomer: string;
  @IsString()
  parkingSlotVehicle: string;
  @IsEnum(ParkingSlotSize)
  size: ParkingSlotSize;
}
