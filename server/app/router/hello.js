module.exports = app => {
    app.router.get('/', app.controller.hello.index);
};
  