/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-12 14:22:46
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
'use strict';

module.exports = {
    user: {
        name: { type: 'string', required: true, description: '用户名' },
        password: { type: 'string', required: true, description: '用户密码' },
        _id: { type: 'string', required: true, description: '唯一id' },
    },
};
