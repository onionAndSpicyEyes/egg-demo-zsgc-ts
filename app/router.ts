/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-11 16:01:28
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/user', controller.user.get);
  router.delete('/user', controller.user.delete);
  router.put('/user', controller.user.put);
  router.post('/user', controller.user.post);
};
