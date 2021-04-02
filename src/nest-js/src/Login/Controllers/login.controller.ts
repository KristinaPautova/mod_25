import { AuthLoginDto } from './../dto/create-login.dto';
import { LoginService } from 'src/Login/Services/Login.service';
import { Body, Controller, Post, HttpCode, Response, Query } from '@nestjs/common';

@Controller('users/auth')
export class LoginController  {
    constructor(private LoginService: LoginService) {}
    @Post('access')
    @HttpCode(200)
    auth(@Body() authLoginDto: AuthLoginDto) {
        return this.LoginService.authorize(authLoginDto);
    }

    @Post('pass-recovery')
    @HttpCode(200)
    sendMail(@Body() authLoginDto: AuthLoginDto) {
        return this.LoginService.sendMail(authLoginDto);
    }

    @Post('pass-reset')
    resetNewPass(@Body() authLoginDto: AuthLoginDto, @Response() res: any, @Query() param: string) {
        return this.LoginService.resetNewPass(authLoginDto, res, param);
    }
}