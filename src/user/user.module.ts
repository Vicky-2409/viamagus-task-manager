import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Task } from 'src/task/entities/task.entity';
import { Team } from 'src/team/entities/team.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Task, Team]), AuthModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
