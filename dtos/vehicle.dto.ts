import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Matches,
  Max,
  Min,
} from "class-validator";
export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Z]{3}[0-9]{3}[A-Z]$/, {
    message: "Invalid vehicle plate number",
  })
  vehiclePlateNumber: string;
  @IsNotEmpty()
  @IsString()
  vehicleType: string;
  @IsNotEmpty()
  @IsString()
  vehicleColor: string;
  @IsNotEmpty()
  @IsString()
  vehicleBrand: string;
  @IsNotEmpty()
  @IsString()
  vehicleModel: string;
  @IsNotEmpty()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  vehicleYear: number;
}
export class UpdateVehicleDto {
  @IsString()
  @Matches(/^[A-Z]{3}[0-9]{3}[A-Z]$/, {
    message: "Invalid vehicle plate number",
  })
  vehiclePlateNumber: string;
  @IsString()
  vehicleType: string;
  @IsString()
  vehicleColor: string;
  @IsString()
  vehicleBrand: string;
  @IsString()
  vehicleModel: string;
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  vehicleYear: string;
}
