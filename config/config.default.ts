/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-11 16:01:28
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662883282410_6820';

  // add your egg config in here
  config.middleware = [];
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/yyy', // 你的数据库地址，egg_article是你数据库得名字
      options: {
        useNewUrlParser: true,
      },
    },
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  const useConfig = {
    swaggerdoc: {
      dirScanner: './app/controller', // 配置自动扫描的控制器路径。
      // 接口文档的标题，描述或其它。
      apiInfo: {
        title: 'EGGJS', // 接口文档的标题。
        description: 'swagger-ui for 张文聪-mongodb增删改查.', // 接口文档描述。
        version: '1.0.0', // 接口文档版本。
      },
      schemes: ['http', 'https'], // 配置支持的协议。
      consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
      produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
      securityDefinitions: {
        // apikey: {type: "apiKey", name: "clientkey", in: "header",},
        // oauth2: {
        //     type: "oauth2", tokenUrl: "http://petstore.swagger.io/oauth/dialog", flow: "password",
        //     scopes: {
        //         "write:access_token": "write access_token",
        //         "read:access_token": "read access_token",
        //     },
        // },
      },
      enableSecurity: false, // 是否启用授权，默认 false（不启用）。
      // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
      routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
      enable: true, // 默认 true (启用)。
    },
  } as const;
  return {
    ...config,
    ...bizConfig,
    ...useConfig,
  };
};
