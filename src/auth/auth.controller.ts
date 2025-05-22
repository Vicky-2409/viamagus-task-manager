import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("login")

    login(@Body() loginUserDto:LoginUserDTO){
        return this.authService.login(loginUserDto)
    }
}
