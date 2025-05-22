import { CreateTaskDetailsDTO } from "./taskDetails.dto";
import {PartialType } from "@nestjs/mapped-types"

export class UpdateTaskDetailsDTO extends PartialType( CreateTaskDetailsDTO) {}