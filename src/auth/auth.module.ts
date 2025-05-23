import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:"7d"}
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports:[JwtModule, JwtStrategy]
})
export class AuthModule {}
