import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdateBookDto extends PartialType(CreateBookDto) {
 @IsOptional()
 @IsString()
 name?: string;

 @IsOptional()
 @IsString()
 isbn?: string;

 @IsOptional()
 @IsEnum(Status)
 status?: Status;

 @IsOptional()
 @IsString()
 description?: string;
}
