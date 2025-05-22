import { TCredentials } from "src/types/types";
import * as dotenv from "dotenv"
dotenv.config()


export const credentials:TCredentials = {
    userName:process.env.AUTH_USERNAME!,
    password:process.env.AUTH_PASSWORD!
}

export const jwt_Secret = process.env.JWT_SECRET
