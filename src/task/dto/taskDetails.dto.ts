import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TaskStatus } from 'src/types/task-status.enum';

export class CreateTaskDetailsDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @Type(()=>Date)
  due_date: Date;

  @IsNumber()
  @IsNotEmpty()
  assignee: number;

}
