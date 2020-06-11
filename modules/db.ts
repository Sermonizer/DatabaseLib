/*
 * @Author: your name
 * @Date: 2020-06-11 21:41:47
 * @LastEditTime: 2020-06-11 21:42:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DatabaseLib\modules\db.ts
 */ 


interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
  }
  
  // 定义一个操作mysql数据库的类 注意：要实现泛型接口 类也要是泛型类
  export class MysqlDb<T> implements DBI<T> {
    add(info: T): boolean {
      console.log(info);
      return true;
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }
  
  // 定义一个操作mssql数据库的类
  export class MssqlDb<T> implements DBI<T> {
    add(info: T): boolean {
      console.log(info);
      return true;
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }