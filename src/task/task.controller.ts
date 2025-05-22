import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { JwtAuthGaurd } from 'src/auth/jwt-auth-gaurd';
import { CreateTaskDetailsDTO } from './dto/taskDetails.dto';
import { TaskService } from './task.service';
import { UpdateTaskDetailsDTO } from './dto/updateTaskDetails.dto';
@UseGuards(JwtAuthGaurd)
@Controller('task')
export class TaskController {
constructor(private taskService:TaskService){}

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks()
    }


    @Post()
    assignTask(@Body(ValidationPipe) createTaskDetailsDTO:CreateTaskDetailsDTO){
        return this.taskService.createTask(createTaskDetailsDTO)
    }

    @Patch(":id")
    updateTask(@Param("id", ParseIntPipe) id : number, @Body()updateTaskDetailsDTO:UpdateTaskDetailsDTO){
        return this.taskService.updateTask(id,updateTaskDetailsDTO )
    }



}
