import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv"
dotenv.config()





export const typeOrmModuleOptions:TypeOrmModuleOptions = {
    type:"mysql",
    host:process.env.DB_HOST,
    port:+process.env.DB_PORT!,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities:true,
    synchronize:true
}





