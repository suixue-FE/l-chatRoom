/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597394183438_5829';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'LChart聊天室服务接口',
      description: 'LChart聊天室服务接口 swagger-ui',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    enableSecurity: false,
    routerMap: true,
    enable: true,
  };
  config.jwt = {
    secret: 'lss-chartServer',
    enable: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      username: 'root',
      password: 'li3306',
      database: 'l_chat_room',
      host: '127.0.0.1',
      dialect: 'mysql',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
