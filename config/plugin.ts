import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate:{
    enable: true,
    package: 'egg-validate'
  },
  sequelize:{
    enable: true,
    package: 'egg-sequelize'
  }
};

export default plugin;
