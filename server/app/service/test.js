// app/service/user.js
const Service = require('egg').Service;

class TestService extends Service {
  async getExample(query) {
    const doc = await this.ctx.test.find(query);
    return doc;
  }
  async writeExample(key, value) {
    await this.ctx.text.insert({
        textName: key,
        textValue: value
    })
  }
}

module.exports = TestService;