/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-11 16:01:28
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
import { Controller } from 'egg';
class Res {
  msg: string;
  code: number;
  constructor(res: [string, number]) {
    this.msg = res[0];
    this.code = res[1];

  }
}
class ResData extends Res {
  data: any;
  constructor(res) {
    // eslint-disable-next-line array-bracket-spacing
    super([res[0], res[1]]);
    this.data = res[2];
  }
}
export default class HomeController extends Controller {
  public async put() {
    const { ctx } = this;
    const user = ctx.request.body;
    if (!user.name || !user.password) {
      // eslint-disable-next-line array-bracket-spacing
      ctx.body = new Res(['参数不正确', 403]);
      return;
    }
    const res = await ctx.service.user.put(user);
    ctx.body = new Res(res);
  }
  public async get() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.get(ctx.query.name);
    ctx.body = new ResData(userInfo);
  }
  public async delete() {
    const { ctx } = this;
    const user = ctx.request.body;
    if (!user.name) {
      // eslint-disable-next-line array-bracket-spacing
      ctx.body = new Res(['参数不正确', 403]);
      return;
    }
    const res = await ctx.service.user.delete(user);
    ctx.body = new Res(res);
  }
  public async post() {
    const { ctx, service } = this;
    const user = ctx.request.body;
    if (!user.name || !user.password) {
      // eslint-disable-next-line array-bracket-spacing
      ctx.body = new Res(['参数不正确', 403]);
      return;
    }
    const res: [string, number] = await service.user.post(user);
    ctx.body = new Res(res);
  }
}
