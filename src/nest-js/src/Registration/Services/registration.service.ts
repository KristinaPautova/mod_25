import { RegistrationDocument } from '../../Schemas/registration.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const getNewToken = require("../../config/getNewToken")
const bcrypt = require('bcrypt');

@Injectable()
export class RegistrationService {
    constructor ( @InjectModel('Users') private registrationModel: Model<RegistrationDocument> ) {}

    async step1(req, res) {
        req.password = bcrypt.hashSync(req.password, bcrypt.genSaltSync(10));
        const newUser = new this.registrationModel(req);
        return newUser.save()
        .then(() => {
            getNewToken(req);
            res.status(200).send()})
        .catch(err => {
            console.log(err);
            res.status(500).send()})
    }

    async uploadPhoto() {
        
    }
}