import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignInDTO } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async signIn(signInDTO: SignInDTO):Promise<any> {
        const user = await this.userService.findOneByUserName(signInDTO.username);

        if(user?.password !== signInDTO.password){
            throw new UnauthorizedException();
        }

        const payload = {
            username: user.username, 
            user_id: user.id,
            avatar_path: user.avatar_path ?? ""
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}
