/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-10 15:31:12
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */


const res = {
    msg: { type: 'string', required: true, description: '提示信息' },
    code: { type: 'number', required: true, description: '状态码' },
};
module.exports = {
    userData: {
        ...res,
        data: {
            type: 'user',
        },
    },
    res,
};
