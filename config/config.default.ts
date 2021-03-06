import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_liuxsen";

  // add your egg config in here
  config.middleware = ["errorHandler", "notfoundHandler", "authToken"];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  const sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "egg_sequelize",
    password: "123456"
  };

  const security = {
    xframe: {
      enable: false
    },
    csrf: {
      enable: false
    }
  };

  // the return config will combines to EggAppConfig
  return {
    middleware: [],
    sequelize,
    security,
    ...config,
    ...bizConfig
  };
};
