import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Task } from './entities/task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Task])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
