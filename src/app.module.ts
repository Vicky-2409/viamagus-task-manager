import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './config/typeorm.config';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions), AuthModule, TaskModule, UserModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
