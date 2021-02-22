'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/hello')(app)
  require('./router/test')(app);
};
