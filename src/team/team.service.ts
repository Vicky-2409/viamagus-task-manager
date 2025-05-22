import { BadRequestException, Injectable } from '@nestjs/common';
import { TeamDetailsDTO } from './dto/team.dto';
import { Team } from './entities/team.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private teamRepo: Repository<Team>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  async createNewTeam(teamDetailsDTO: TeamDetailsDTO) {
    const { name, members } = teamDetailsDTO;
    const users = await this.userRepo.find({ where: { id: In(members) } });

    const existingTeam = await this.teamRepo.find({where:{name}})
    
    if(existingTeam.length !== 0) throw new BadRequestException("The team already exists")
    if(users.length !== members.length) throw new BadRequestException("The given Ids are not valid")
    const newTeam = this.teamRepo.create({ name, members: users });

    return await this.teamRepo.save(newTeam);
  }
}
