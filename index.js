const http=require('http');
const express=require('express');
const qs=require('querystring');
const user=require('./user');
const porduct=require('./product');
const shoppingCart=require('./shoppingCart');

var app=express();
http.createServer(app).listen(5050);

app.use(express.static('public'));
app.use('/',(req,res,next)=>{
    if(req.method==='POST'){
        req.on('data',(buff)=>{
            req.body=qs.parse(buff.toString());
            next();
        })
    }else{
        next();
    }
});
app.get('/',(req,res)=>{
    res.redirect('/LOGIN.html');
});
app.post('/product',porduct.updata);
app.post('/searchKeyWords',porduct.searchKeyWord);
app.get('/productPages',porduct.pages);
app.post('/user/login',user.login);
app.post('/addCart',shoppingCart.addCart);
app.post('/cart',shoppingCart.showCart);
app.post('/delete',shoppingCart.deleteCart);
app.post('/reduce',shoppingCart.reduceCart);
app.post('/increase',shoppingCart.increaseCart);
