/*
 * @Author: your name
 * @Date: 2020-06-11 21:14:46
 * @LastEditTime: 2020-06-11 21:43:28
 * @LastEditors: Please set LastEditors
 * @Description: 功能：定义一个操作数据库的库 支持mysql mssql mongodb
 *               要求：数据库的功能一样 都有 add update delete get方法
 *               注意：约束统一的规范 及代码重用
 *               解决方案：需要约束规范所以定义接口 需要代码重用所以用到泛型
 *                  1. 接口
 *                  2. 泛型
 * @FilePath: \DatabaseLib\index.ts
 */

import { MysqlDb, MssqlDb } from "./modules/db";

// 操作用户表 定义一个User类和数据表做映射
class User {
  username: string | undefined;
  passward: string | undefined;
}

let u1 = new User();
u1.username = "小朋友";
u1.passward = "admin";

let newMysql = new MysqlDb<User>(); // 类作为参数来约束数据传入的类型
newMysql.add(u1);
