import { IsInt, IsNumber, IsString } from 'class-validator';
export class FileDto {
  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsNumber()
  size: number;
}
