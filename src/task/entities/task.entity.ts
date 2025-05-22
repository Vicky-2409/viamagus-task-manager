import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TaskStatus } from "src/types/task-status.enum";
import { User } from "src/user/entities/user.entity";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description:string

    @Column({type:"date"})
    due_date: Date

    @ManyToOne(()=>User, (user) => user.assignedTasks)
    assignee:User

    @Column({type:"enum", enum:TaskStatus, default:TaskStatus.PENDING})
    status:TaskStatus

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}