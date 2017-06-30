/**
 * Created by Administrator on 2017/4/27.
 */
var li=document.querySelector("#header>ul>li:nth-child(2)");
var lis=document.querySelectorAll("#navHover>ul>li");
var div=document.querySelector("#navHover");
li.onmouseenter=function(){
    move("height","move");
};
div.onmouseleave=function(){
    move("","");
};
function move(val1,val2){
    var timer=null;
    clearTimeout(timer);
    div.className=val1;
    timer=setTimeout(function(){
        for(var i= 0;i<lis.length;i++){
            (function(i){setTimeout(function(){lis[i].className=val2;},i*100)})(i)
    }},300);

}