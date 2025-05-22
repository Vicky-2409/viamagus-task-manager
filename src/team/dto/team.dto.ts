import { ArrayNotEmpty, IsArray, IsInt, isNotEmpty, IsNotEmpty, IsString } from "class-validator"


export class TeamDetailsDTO{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({each:true})
    members:number[]
}