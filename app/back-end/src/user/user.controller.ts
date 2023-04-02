import { Controller , Get, Param, UseGuards, Request} from '@nestjs/common';
import { UserService } from './user.service';
import {User} from './user.entity'
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    get(): Promise<User[]>{
        return this.userService.get();
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id') id:number){
        return this.userService.findOne(id);
    }


}
