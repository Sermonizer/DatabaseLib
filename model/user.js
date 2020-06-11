"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-11 21:46:13
 * @LastEditTime: 2020-06-11 21:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DatabaseLib\model\user.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var db_1 = require("../modules/db");
// 操作用户表 定义一个User类和数据表做映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MysqlDb(); // 类作为参数来约束数据传入的类型
exports.UserModel = UserModel;
