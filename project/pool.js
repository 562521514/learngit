/**
 * Created by Administrator on 2017/6/5.
 */
const mysql=require('mysql');
module.exports=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'meizu',
    connectionLimit:5
})