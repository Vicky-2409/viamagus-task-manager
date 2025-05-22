import { Task } from "src/task/entities/task.entity";
import { Team } from "src/team/entities/team.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"users"})
export class User{


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({unique:true})
    email:string

    @ManyToOne(()=>Team, (team)=>team.members)
    team: Team

    @OneToMany(()=> Task, (task) => task.assignee)
    assignedTasks: Task[]
}