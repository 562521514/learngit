/**
 * Created by Administrator on 2017/6/9.
 */
const pool=require('./pool');

module.exports= {
    addCart:(req,res)=>{
        var pid=req.body.pid;
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query('select*from t_cart where pid=?',[pid],(err,result)=>{
                if(result.length==0){
                    conn.query('insert into t_cart values(?,?,?,?)',[null,pid,1,uid],(err,result)=>{
                        if(err){
                            var data={code:-1}
                        }else{
                            var data={code:1}
                        }
                        res.json(data);
                        conn.release();
                    })
                }else{
                    conn.query('update t_cart set count=count+1 where pid=?',[pid],(err,result)=>{
                        if(err){
                            var data={code:-2}
                        }else{
                            var data={code:2}
                        }
                        res.json(data);
                        conn.release();
                    })
                }
            })
        })
    },
    showCart:(req,res)=>{
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query('select*from t_cart where uid=?',[uid],(err,result)=>{
                //console.log(result);
                if(result.length!=0){
                var progress=0;
                    for(let cart of result){
                        conn.query('select*from t_product where pid=?',[cart.pid],(err,plist)=>{

                           cart['pdetail']=plist;
                            progress++;
                            if(progress==result.length){
                               // console.log(result)
                                res.json(result);
                                conn.release();
                            }

                        })
                    }

                }else{
                    res.json(result);
                    conn.release();
                }
            })
        })
    },
    deleteCart:(req,res)=>{
        var cid=req.body.cid;
        pool.getConnection((err,conn)=>{
            conn.query('delete from t_cart where cid=?',[cid],(err,result)=>{
                if(result.affectedRows==1){
                    res.json({code:1})
                }else{
                    res.json({code:-1})
                }
                conn.release();
            })
        })
    },
    reduceCart:(req,res)=>{
        var pid=req.body.pid;
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query('update t_cart set count=count-1 where pid=? and uid=?',[pid,uid],(err,result)=>{
                if(result.affectedRows==1){
                    res.json({code:1})
                }else{
                    res.json({code:-1})
                }
                conn.release();
            })
        })
    },
    increaseCart:(req,res)=>{
        var pid=req.body.pid;
        var uid=req.body.uid;
        pool.getConnection((err,conn)=>{
            conn.query('update t_cart set count=count+1 where pid=? and uid=?',[pid,uid],(err,result)=>{
                if(result.affectedRows==1){
                    res.json({code:1})
                }else{
                    res.json({code:-1})
                }
                conn.release();
            })
        })
    }
};
