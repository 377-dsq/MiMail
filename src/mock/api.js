import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,//默认为0，是10001——11000之间的随机数
    "username": "@cname",//@cname随机产生一个中文名称 @name为英文名
    "email": "admin@51purse.com",
    "phone": 0,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});