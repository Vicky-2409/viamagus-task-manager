import { ConflictException, Injectable } from '@nestjs/common';
import { UserDetailsDTO } from './dto/userDetails.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    
    constructor(@InjectRepository(User) private userRepo:Repository<User>){}
    async createUser(userDetailsDTO:UserDetailsDTO){
        const { email } = userDetailsDTO
        const existingUser = await this.findByEmail(email)
        if(existingUser) throw new ConflictException("Email id already exists")
        const newUser = this.userRepo.create(userDetailsDTO)
        return await this.userRepo.save(newUser)
    }

    async findByEmail(email:string){
       return await this.userRepo.findOne({where:{email}})
        
    }

    async getAllUsers(){
        return await this.userRepo.find()
    }
}
