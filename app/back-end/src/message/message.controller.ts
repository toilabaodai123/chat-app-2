import { Controller, Get ,Post ,Body} from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { CreateMessageDTO } from './dto/createmessage.dto';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
    
    @Get()
    getMessages():Promise<Message[]>{
        return this.messageService.getMessages();
    }

    @Post()
    saveMessage(@Body() createMessageDTO: CreateMessageDTO):Promise<Message>{
        return this.messageService.saveMessage(createMessageDTO);
    }
}
