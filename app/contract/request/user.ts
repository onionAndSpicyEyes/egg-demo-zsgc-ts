/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-10 15:31:12
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */

const userPassword = {
    password: { type: 'string', required: true, min: 2, max: 10, description: '密码' },

};
const createUserBase = {
    name: { type: 'string', required: true, min: 2, max: 10, description: '用户姓名' },
    ...userPassword,
};

module.exports = {
    userRequest: createUserBase,
    deleteRequest: userPassword,
};
