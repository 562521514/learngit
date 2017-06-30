//向量的表示方法
function vector(a,b){
    return{
        x: b.x- a.x,
        y: b.y- a.y
    }
}
//向量的差乘公式
function vectorProduct(v1,v2){
    return v1.x*v2.y-v2.x*v1.y;
}
//向量差乘后的结果位运算判断符号
function sameSign(a,b){
    return(a^b)>=0;
}
//判断所有向量差乘后的结果是否一致
function isPointInTrangle(p,a,b,c){
    var pa=vector(p,a);
    var pb=vector(p,b);
    var pc=vector(p,c);

    var t1=vectorProduct(pa,pb);
    var t2=vectorProduct(pb,pc);
    var t3=vectorProduct(pc,pa);
    return sameSign(t1,t2)&&sameSign(t2,t3);
}
//是否需要延时
function needDelay(elem,leftCorner,currMousePos){
    var offset=elem.offset();

    var topLeft={
        x:offset.left,
        y:offset.top
    };
    var bottomLeft={
        x:offset.left,
        y:offset.top+elem.height()
    };
    return  isPointInTrangle(currMousePos,leftCorner,topLeft,bottomLeft);
}