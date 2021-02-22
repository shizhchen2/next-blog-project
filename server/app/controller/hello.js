'use strict';

const Controller = require('egg').Controller;

class HelloController extends ControllerP{
    async index(){
        const {ctx} = this
        ctx.status = 200
        ctx.body = 'hello eggjs';
    }
}