'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async getExample() {
    const { ctx } = this;
    const key = ctx.params.example_key
    const docInfo = await ctx.service.test.getExample(key)
    ctx.status = 200
    ctx.body = docInfo;
  }
  async setExample(){
      const { ctx } = this
      const key = ctx.params.exmaple_key
      const value = ctx.params.exmaple_value
      await ctx.service.test.writeExample(key, value)
      ctx.status = 200
      ctx.body = 'success'
  }
}

module.exports = TestController;
