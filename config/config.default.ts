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

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
