/**
 * Created by Administrator on 2017/6/5.
 */
const pool=require('./pool');
module.exports={
    login:(req,res)=>{
        var uname=req.body.uname;
        var upwd=req.body.upwd;
        pool.getConnection((err,conn)=>{
            conn.query('select*from t_user where uname=? and upwd=?',[uname,upwd],(err,result)=>{
                if(result.length!=0){
                    res.json(result);
                    conn.release();
                }else{
                    res.json({code:-1});
                    conn.release();
                }
            })
        })
    }
}