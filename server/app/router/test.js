module.exports = app => {
    app.router.get('/test/get_example/:example_key', app.controller.test.getExample);
    app.router.post('/test/set_example/:example_key/:example_value', app.controller.test.setExample);
  };
  