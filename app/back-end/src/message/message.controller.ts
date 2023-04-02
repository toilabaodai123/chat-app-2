import { Controller, Get } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
    
    @Get()
    getMessages():Promise<Message[]>{
        return this.messageService.getMessages();
    }
}
