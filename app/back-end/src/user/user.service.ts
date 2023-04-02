import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        ){}

    get(): Promise<User[]>{
        return this.userRepository.find();
    }

    findOne(id: number):Promise<User|null>{
        return this.userRepository.findOneBy({id});
    }

    findOneByUserName(username: string):Promise<User|null>{
        return this.userRepository.findOneBy({username});
    }
 }
