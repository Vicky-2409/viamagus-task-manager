import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserDetailsDTO{

    @IsString()
    @IsNotEmpty()
    name:string


    @IsEmail()
    email:string
}