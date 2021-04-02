import { RegistrationService } from './../Services/registration.service';
import { registrationDto } from './../dto/registration.dto';
import { Body, Controller, Post, HttpCode, Response, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const fs = require('fs'); 

@Controller('users/registration')
export class RegistrationController  {
    constructor(private RegistrationService: RegistrationService) {}

    @Post('step1')
    @HttpCode(200)
    step1(@Body() registrationDto: registrationDto, @Response() res: any) {
        return this.RegistrationService.step1(registrationDto, res);
    }

    @Post('uploadAvatar')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/avatar'
        , filename: (req, file, cb) => {
          cb(null, file.originalname);
        }
      })
    }))
    step2(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
      return {"img": file.originalname};
    }
    @Get('toStep3')
    toStep3() {
      console.log("req")
      return;
    }
    @Post('uploadDocs')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/docs'
        , filename: (req, file, cb) => {
          cb(null, file.originalname);
        }
      })
    }))
    step3(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
      return {
        "img": file.originalname,
        "size": (file.size/1000000).toFixed(2),
        "format": file.mimetype.slice(file.mimetype.indexOf("/")+1)
    };
    }
}