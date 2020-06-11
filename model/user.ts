/*
 * @Author: your name
 * @Date: 2020-06-11 21:46:13
 * @LastEditTime: 2020-06-11 21:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DatabaseLib\model\user.ts
 */

import { MysqlDb, MssqlDb } from "../modules/db";

// 操作用户表 定义一个User类和数据表做映射
class UserClass {
  username: string | undefined;
  passward: string | undefined;
}

let UserModel = new MysqlDb<UserClass>(); // 类作为参数来约束数据传入的类型

export { UserClass, UserModel };
