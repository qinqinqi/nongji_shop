# 1、MongoDB

`Mongodb`是非关系型数据库，查询语句使用的是独特的Mongodb查询方式

`MsSQL`是关系型数据库，查询语句使用的是传统的sql语句，在海量处理数据的时候效率会很低



# 2、MongoDB安装

* [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
* 下一步下一步就好   (去掉安装mongodb compass的勾)
* 配置环境变量到 bin 目录
* 必须新建：C://data/db
* 启动：mongod



# 3、常用的命令

## ①、基本命令

* mongo
* 变量var
* 函数function
* 输出print
* 显示数据库 show dbs  （数据库什么都没有就不会显示）
* 进入/创建 数据库 use + 数据库名
* 显示集合show collections
* 显示当前的数据库 db



## ②、增删改查

* 插入： db.表名.insert({"kay":"value"})

  * 插入多条数据可以使用数组：db.表名.insert([user1, user2, user3])

* 查询： db.表名.find()

* 查询第一条数据：db.表名.findOne()

* 更新数据：db.表名.update()

* 删除：db.表名.remove(条件)

* 删除集合（表）：db.表名.drop()

* 删除数据库：db.dropDatabase()     （必须在要删除的数据库内）

* 加载js

  ```

  ```

  ​

## ③、改

db.表名.update()

* $set：db.表名.update({查出要改的条件}, {$set:{要改的}})
* $unset：删除某个字段
* upsert：更新/插入数据，如果不存在update的记录，是否插入，true为插入，默认为false
* multi：默认是false，只更新找到的第一条记录。如果为true，把按条件查询出来的记录全部更新。
* $push：直接插入，不会检查是否存在一样的值
* $pushAll：可以追加多个值到一个数组字段中
* $addToSet：检查是否有插入的数据，只有当这个值在数组中不存在时才增加
* $each
* findAndModify：应答式的



## ④、查

* `$lt `   ` $gt`   `$lte`   `$gte`
* `$in`
* `$for`   `$and`  `$not`
* 数组：`$all`   `$in`   `$size`
* 分页：limit   skip    sort(负数是降序，正数是升序)



## ⑤、索引

* 生成随机数值
* db.collection.ensureIndex({username: 1})
* db.collection.getIndexes()
* db.collection.dropIndex({username: 1})