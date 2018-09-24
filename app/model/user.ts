import { Application } from 'egg';

export default function User (app:Application)  {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user',{
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: STRING(30),
    age: INTEGER,
    email: STRING,
    phone: STRING,
    password: STRING,
    sex: INTEGER,
    created_at: DATE,
    updated_at: DATE
  })
  return User;
}
