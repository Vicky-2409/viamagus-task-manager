import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserDetailsDTO } from './dto/userDetails.dto';
import { UserService } from './user.service';
import { JwtAuthGaurd } from 'src/auth/jwt-auth-gaurd';


@UseGuards(JwtAuthGaurd)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  addUser(@Body(ValidationPipe) userDetailsDTO: UserDetailsDTO) {
    return this.userService.createUser(userDetailsDTO);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
