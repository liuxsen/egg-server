npx sequelize model:generate --name Shop --attributes name:string

sequelize migration:create --name add-title-todos

```js
// app/database/migrations/test.js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('table_name','column_name',Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
   queryInterface.removeColumn('tableName','column_name')
  }
};
```

npx sequelize db:migrate

```js

'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    },{
      charset: 'utf8'
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};

```



npx sequelize model:generate --name User --attributes name:string,age:number,email:string,phone:string;
