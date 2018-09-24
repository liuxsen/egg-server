import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/users', controller.user.list);
  router.post('/users/register', controller.user.register)
};
