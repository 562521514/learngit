$(document).ready(function(){
    var sub=$("#sub");
    var activeRow;
    var activeMenu;
    var timer;
    var mouseInSub=false;
    //判断鼠标是否在2级菜单
    sub.on("mouseenter",function(e){
        mouseInSub=true;
    }).on("mouseleave",function(e){
        mouseInSub=false;
    });

//定义一个空数组准备接收鼠标的坐标
    var mouseTrack=[];
    var moveHandler=function(e){
        mouseTrack.push({
            x: e.pageX,
            y: e.pageY
        });
        //只留三个值
        if(mouseTrack.length>3){
            mouseTrack.shift();
        }
    };


    $("#test").on("mouseenter",function(e){
        //鼠标在父容器内2级菜单显示
        sub.removeClass("none");
        //给document绑定鼠标移动事件
        $(document).bind("mousemove",moveHandler);
    }).on("mouseleave",function(e){
        //移出时2级菜单隐藏
        sub.addClass("none");

        if(activeRow){
            activeRow.removeClass("active");
            activeRow=null;
        }
        if(activeMenu){
            activeMenu.addClass("none");
            activeMenu=null;
        }
        $(document).unbind("mousemove",moveHandler);
    })
        .on("mouseenter","li",function(e){
            if(!activeRow){
                activeRow=$(e.target).addClass("active");
                activeMenu=$("#"+activeRow.data("id"));
                activeMenu.removeClass("none");
                return;
            }
            if(timer){
                clearTimeout(timer);
            }

            var currMousePos=mouseTrack[mouseTrack.length-1];
            var leftCorner=mouseTrack[mouseTrack.length-2];

            var delay=needDelay(sub,leftCorner,currMousePos);
            if(delay){
                timer=setTimeout(function(){
                    if(mouseInSub){
                        return;
                    }
                    activeRow.removeClass("active");
                    activeMenu.addClass("none");
                    activeRow=$(e.target);
                    activeRow.addClass("active");
                    activeMenu=$("#"+activeRow.data("id"));
                    activeMenu.removeClass("none");
                    timer=null;
                },300);
            }else{
                var prevActiveRow=activeRow;
                var prevActiveMenu=activeMenu;
                activeRow=$(e.target);
                activeMenu=$("#"+activeRow.data("id"));
                prevActiveRow.removeClass("active");
                prevActiveMenu.addClass("none");
                activeRow.addClass("active");
                activeMenu.removeClass("none");
            }


        })
});