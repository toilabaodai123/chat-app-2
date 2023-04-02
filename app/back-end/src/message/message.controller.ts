import { Controller, Get ,Post ,Body, Param, ParseIntPipe, UseGuards, Request} from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { CreateMessageDTO } from './dto/createmessage.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
    
    @Get()
    getMessages():Promise<Message[]>{
        return this.messageService.getMessages();
    }

    @UseGuards(AuthGuard)
    @Post()
    saveMessage(@Body() createMessageDTO: CreateMessageDTO, @Request() req):Promise<Message>{
        return this.messageService.saveMessage(createMessageDTO,req);
    }

    @Get('/:id')
    findOne(@Param('id',ParseIntPipe) id: number){
        return this.messageService.findOne(id);
    }
}
