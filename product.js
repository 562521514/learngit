/**
 * Created by Administrator on 2017/6/8.
 */
const pool=require('./pool');
module.exports={
    updata:(req,res)=>{
        var page=parseInt(req.body.page);
        pool.getConnection((err,conn)=>{
            conn.query('select*from t_product limit ?,9',[page],(err,result)=>{
                res.json(result);
                conn.release();
            })
        })
    },
    pages:(req,res)=>{
        pool.getConnection((err,conn)=>{
            conn.query('select*from t_product',(err,result)=>{
                res.json(result.length);
                conn.release();
            })
        })
    },
    searchKeyWord:(req,res)=>{
        var kw=req.body.kw;
        pool.getConnection((err,conn)=>{
            conn.query('select pname from t_product where pname like ?',["%"+kw+"%"],(err,result)=>{
               console.log(result);
                res.json(result);
                conn.release();
            })
        })
    }
}