import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Team{

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    name:string

    @OneToMany(()=> User, user=> user.team)
    members:User[]
}