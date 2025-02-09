import { Status } from "@prisma/client";
import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
 @IsString()
 name: string;

 @IsString()
 isbn: string;

 @IsEnum(Status)
 status: Status;

 @IsOptional()
 @IsString()
 description?: string;
}
