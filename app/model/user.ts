export default app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 验证规则
    const ArticleSchema = new Schema({
        name: {
            type: String,
            minlength: [2, '字符串度不能小于2'],
            maxlength: [10, '字符串度不能大于10'],
        },
        password: {
            type: String,
            minlength: [2, '字符串度不能小于6'],
            maxlength: [10, '字符串度不能大于12'],
        },
    });

    return mongoose.model('User', ArticleSchema, 'yyy'); // Article在service中调用的名称 ArticleSchema是验证的字段规则  artcle是你数据集合表的名称
};
