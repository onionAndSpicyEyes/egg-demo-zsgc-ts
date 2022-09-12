/* eslint-disable array-bracket-spacing */
import { Service } from 'egg';
import { GetMongoData, PutMongoData, PostMongoData } from '../utils/mongo';
/**
 * Test Service
 */
export default class Test extends Service {
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
  public async delete(user): Promise<any> {
    const { ctx } = this;
    const userInfo = await GetMongoData({ name: user.name }, 'User', ctx);
    if (!userInfo.length) {
      return ['删除失败,无此用户', 403];
    }
    await ctx.model.User.deleteOne(user);
    return ['删除成功', 200];
  }
  public async get(username) {
    const { ctx } = this;
    const userInfo = await GetMongoData({ name: username }, 'User', ctx);
    if (!userInfo.length) {
      return ['查询失败,无此用户', 403, {}];
    }
    return ['查询成功', 200, userInfo[0]];
  }
  public async post(user: { name: string; }): Promise<any> {
    const { ctx } = this;
    const userInfo = await GetMongoData({ name: user.name }, 'User', ctx);
    if (userInfo.length) {
      return ['添加失败，已有用户', 403];
    }
    await PostMongoData(user, 'User', ctx);
    return ['添加成功', 200];
  }
  public async put(user): Promise<any> {
    const { ctx } = this;
    const userInfo = await GetMongoData({ name: user.name }, 'User', ctx);
    if (!userInfo.length) {
      return ['修改失败,无此用户', 403];
    }
    await PutMongoData(user, 'User', ctx);
    return ['修改密码成功', 200];
  }
}
