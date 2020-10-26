import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/cloud/management/util/getMenuJson.sa', controller.mockMenu.index);
  router.post('/cloud/management/rest/np/login/captcha', controller.mockUser.captcha);
  router.get('/casServer/user', controller.mockUser.index);
};
