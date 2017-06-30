//�����ı�ʾ����
function vector(a,b){
    return{
        x: b.x- a.x,
        y: b.y- a.y
    }
}
//�����Ĳ�˹�ʽ
function vectorProduct(v1,v2){
    return v1.x*v2.y-v2.x*v1.y;
}
//������˺�Ľ��λ�����жϷ���
function sameSign(a,b){
    return(a^b)>=0;
}
//�ж�����������˺�Ľ���Ƿ�һ��
function isPointInTrangle(p,a,b,c){
    var pa=vector(p,a);
    var pb=vector(p,b);
    var pc=vector(p,c);

    var t1=vectorProduct(pa,pb);
    var t2=vectorProduct(pb,pc);
    var t3=vectorProduct(pc,pa);
    return sameSign(t1,t2)&&sameSign(t2,t3);
}
//�Ƿ���Ҫ��ʱ
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