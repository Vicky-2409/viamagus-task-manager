import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { credentials } from 'src/config/env.config';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(loginUserDTO: LoginUserDTO) {
    const { username, password } = loginUserDTO;
    if (
      username !== credentials.userName ||
      password !== credentials.password
    ) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload = { loginUserDTO };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
