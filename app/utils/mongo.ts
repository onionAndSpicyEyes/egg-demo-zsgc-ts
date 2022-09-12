/* eslint-disable @typescript-eslint/indent */
import { Context } from 'egg';

/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-09-12 11:28:05
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
export const GetMongoData = async (filter: object, modelName: string, ctx: Context<any>) => {
    return await ctx.model[modelName].find(filter);
};
export const PostMongoData = async (data: object, modelName: string, ctx: Context<any>) => {
    return await ctx.model[modelName].create(data);
};
export const DeleteMongoData = async (data: object, modelName: string, ctx: Context<any>) => {
    return await ctx.model[modelName].delete(data);
};
export const PutMongoData = async (data: { name: string, password: string }, modelName: string, ctx: Context<any>) => {
    return await ctx.model[modelName].updateOne({ name: data.name }, data);
};
