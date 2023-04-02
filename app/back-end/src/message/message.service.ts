import { Injectable } from '@nestjs/common';
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

    async saveMessage(createMessageDTO: CreateMessageDTO):Promise<Message> {
        const message = new Message();
        message.content = createMessageDTO.content;
        message.created_at = Date.now();
        message.entity_id = -1;
        message.entity_type = Message.ENTITY_TYPE;
        message.user_id = -1;
        await this.messageRepository.save(message);
        return message;
    }
}
