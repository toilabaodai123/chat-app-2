import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMessageDTO } from './dto/createmessage.dto';


@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        ){}

    getMessages(): Promise<Message[]>{
        return this.messageRepository.find();
    }

    async saveMessage(createMessageDTO: CreateMessageDTO,req):Promise<Message> {
        const message = new Message();
        message.content = createMessageDTO.content;
        message.entity_id = createMessageDTO.entity_id;
        message.entity_type = createMessageDTO.entity_type;
        message.user_id = req.user.user_id;
        message.created_at = Date.now();

        await this.messageRepository.save(message);
        
        return message;
    }

    async findOne(id:number):Promise<Message|undefined>{
        const message = await this.messageRepository.findOneBy({id});
        
        if(!message){
            throw new NotFoundException(`Message with "${id}" not found`);
        }

        return message;
    }
}
