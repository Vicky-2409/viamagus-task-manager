import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { TeamDetailsDTO } from './dto/team.dto';
import { TeamService } from './team.service';
import { JwtAuthGaurd } from 'src/auth/jwt-auth-gaurd';

@UseGuards(JwtAuthGaurd)
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Post()
  createNewTeam(@Body(ValidationPipe) teamDetailsDTO: TeamDetailsDTO) {
    return this.teamService.createNewTeam(teamDetailsDTO);
  }
}
