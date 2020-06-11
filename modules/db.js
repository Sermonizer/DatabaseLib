"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-11 21:41:47
 * @LastEditTime: 2020-06-11 21:42:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DatabaseLib\modules\db.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MssqlDb = exports.MysqlDb = void 0;
// 定义一个操作mysql数据库的类 注意：要实现泛型接口 类也要是泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
// 定义一个操作mssql数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDb;
}());
exports.MssqlDb = MssqlDb;
