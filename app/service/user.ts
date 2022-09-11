import { Service } from 'egg';

/**
 * Test Service
 */
const users: any = [];
const getUser = username => {
  return users.find((item: { name: string }) => item.name == username);
};
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
  public async delete(userInfo): Promise<any> {
    const userIndex = users.findIndex((item: any) => item.name == userInfo.name);
    if (userIndex === -1) {
      return ['删除失败,无此用户', 403];
    }
    users.splice(userIndex, 1);
    return ['删除成功', 200];
  }
  public async get(username) {
    const user = getUser(username);
    if (!user) {
      return ['查询失败,无此用户', 403, {}];
    }
    return ['查询成功', 200, user];
  }
  public async post(user): Promise<any> {
    console.log(123);
    if (getUser(user.name)) {
      return ['添加失败，已有用户', 403];
    }
    users.push(user);
    return ['添加成功', 200];
  }
  public async put(userInfo): Promise<any> {
    const userIndex = users.findIndex((item: any) => item.name == userInfo.name);
    if (userIndex === -1) {
      return ['修改失败,无此用户', 403];
    }
    users[userIndex] = userInfo;
    return ['修改密码成功', 200];
  }
}
