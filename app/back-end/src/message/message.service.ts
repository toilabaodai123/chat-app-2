import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        ){}

    getMessages(): Promise<Message[]>{
        return this.messageRepository.find();
    }
}
