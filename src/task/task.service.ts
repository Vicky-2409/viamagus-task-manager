import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDetailsDTO } from './dto/taskDetails.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { UpdateTaskDetailsDTO } from './dto/updateTaskDetails.dto';
import { threadId } from 'worker_threads';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  async createTask(createTaskDetailsDTO: CreateTaskDetailsDTO) {
    const { assignee } = createTaskDetailsDTO;
    const user = await this.userRepo.findOne({ where: { id: assignee } });

    if(!user){
         throw new NotFoundException("The assigned user Not Found")
    }
    const newTask = this.taskRepo.create({
      ...createTaskDetailsDTO,
      assignee: user,
    });

    return await this.taskRepo.save(newTask);
  }

  async getAllTasks(){
    return await this.taskRepo.find({relations:["assignee"]})
  }
  async updateTask(id:number, updateTaskDetails:UpdateTaskDetailsDTO){
    const task = await this.taskRepo.findOne({where:{id}, relations:["assignee"]})
    if(!task) throw new NotFoundException("The task id is invalid")

    if(updateTaskDetails?.assignee){
         const user = await this.userRepo.findOne({ where: { id: updateTaskDetails.assignee } });
         if(!user){
            throw new NotFoundException("The assigned user not found")
         }
         task.assignee = user
    }

    Object.assign(task, updateTaskDetails)

    return await this.taskRepo.save(task)
  }
}
