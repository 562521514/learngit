//�������ȫ����Ʒ
//
//    var allProduct_lis=document.querySelectorAll("#allProduct>ul>li");
//    for(var i=0;i<allProduct_lis.length;i++){
//        allProduct_lis[i].onmouseenter=function(){
//            this.firstElementChild.className="a_mouseover";
//            this.lastElementChild.className="visible"
//        };
//        allProduct_lis[i].onmouseleave=function(){
//            this.lastElementChild.className="";
//            this.firstElementChild.className="";
//        }
//    }

//�ֲ�ͼ
if(sessionStorage['uname']){
    loginLi.firstElementChild.innerHTML='欢迎回来:'+sessionStorage['uname'];
    regist.firstElementChild.innerHTML='查看购物车';
}
$('#regist a').on('click',function(e){
    e.preventDefault();
    location.href='Cart.html';
    console.log(this)
});
function slider(){
    var sliderImg=document.querySelector("#slider img.show");
    var src=sliderImg.getAttribute("src");
    var n=src.lastIndexOf("/");
    var lis=document.querySelectorAll("#slider>ul>li");
    for(var i=0;i<lis.length;i++)
        lis[i].className="";
    sliderImg.className="";
    if(sliderImg.nextElementSibling!=null){
    sliderImg.nextElementSibling.className="show";
    lis[src.slice(n+1,n+2)].className="circle";
    }
    else{
    document.querySelector("#slider img:first-child").className="show";
        lis[0].className="circle"
    }
}
var timer=setInterval(slider,3000);
//�ֲ�ͼ����л�
function prev(){
    var sliderImg=document.querySelector("#slider img.show");
    if(sliderImg.previousElementSibling!=null){
        sliderImg.className="";
        sliderImg.previousElementSibling.className="show";
        var src=sliderImg.getAttribute("src");
        var n=src.lastIndexOf("/");
        var lis=document.querySelectorAll("#slider>ul>li");
        for(var i=0;i<lis.length;i++)
            lis[i].className="";
        sliderImg.className="";
        lis[(src.slice(n+1,n+2))-2].className="circle";

    }
}
function next(){
    var sliderImg=document.querySelector("#slider img.show");
    if(sliderImg.nextElementSibling!=null){
        sliderImg.className="";
        sliderImg.nextElementSibling.className="show";
        var src=sliderImg.getAttribute("src");
        var n=src.lastIndexOf("/");
        var lis=document.querySelectorAll("#slider>ul>li");
        for(var i=0;i<lis.length;i++)
            lis[i].className="";
        sliderImg.className="";
        lis[src.slice(n+1,n+2)].className="circle";
    }
}
//СԲ��
document.querySelector("#slider>ul").addEventListener("mouseover",function(e){

    var lis=document.querySelectorAll("#slider>ul>li");
    var ul=document.querySelector("#slider>ul");
    if(e.target!=ul){
        for(var i=0;i<lis.length;i++)
            lis[i].className="";
        e.target.className="circle";
        var sliderImg=document.querySelector("#slider img.show");
        sliderImg.className="";
        var n= e.target.innerHTML;
        document.querySelector("[src='img1/slider/"+n+".jpg']").className="show";
    }
});
//�������ֹͣ�ֲ�
document.querySelector("#slider").onmouseover=function(){
    clearInterval(timer);
    timer=null;
};
//����Ƴ���ʼ�ֲ�
document.querySelector("#slider").onmouseout=function(){
    timer=setInterval(slider,3000);
};
//�����Ƽ��ĵ���¼�
function moveLeft(){
document.querySelector("#hotProduct>ul").style.left="-100%";
    document.querySelector("#hotHeader>a:nth-child(2)").style.opacity=.5;
    document.querySelector("#hotHeader>a:last-child").style.opacity=1;
}
function moveRight(){
    document.querySelector("#hotProduct>ul").style.left=0;
    document.querySelector("#hotHeader>a:nth-child(2)").style.opacity=1;
    document.querySelector("#hotHeader>a:last-child").style.opacity=.5;
}
//楼层点亮
if(window.$===undefined){
    throw new Error("依赖JQuery");
}
jQuery.fn.scrollspy=function(options){
    var $aff=$(options.target);
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var liItems=$aff.find("li");
        if(top>800&&top<2300){
            $aff.fadeIn();
            if(top<1400){
                liItems.eq(0).addClass("active").siblings().removeClass("active");
            }else if(top>2000){
                liItems.eq(2).addClass("active").siblings().removeClass("active");
            }else{
                liItems.eq(1).addClass("active").siblings().removeClass("active");
            }
        }else{
            $aff.fadeOut();
        }
    })
};
  // 动态获取服务器数据 手机产品
var pageNo=0;
  function product(pageNo){
      $.ajax({
          type:'POST',
          url:'product',
          data:{page:pageNo},
          success:function(result){
              //console.log(2)
              //console.log(result)
              var html=`
        <li>
                <a href="#"><img src="img1/phone/Cgbj0Fjq_LuAUGV1AADnNrBLFXg171.jpg"/></a>
                <div>
                    <a href="#">立即购买</a>
                </div>
            </li>
        `;
              for(var i=0;i<result.length;i++){
                  html+=`
               <li>
                <a href="#">
                    <img src="${result[i].pic}"/>
                    <h4>${result[i].pname}</h4>
                    <p>享3期免息 赠价值199元耳机</p>
                    <span>&yen;${result[i].price}</span>
                </a>
                <p>
                    <button class="addCart" data-pid="${result[i].pid}">加购物车</button>
                </p>
            </li>
            `;
              }
              $('#section>.cellphone').html(html);
          }
      })
  }
    product(pageNo);
//页码 动态获取
$.ajax({
    type:'GET',
    url:'productPages',
    success:function(result){
        //console.log(result)
        var num=Math.ceil(result/9);
        var html='<li class="active">1</li>';
        for(var i=0;i<num-1;i++){
            html+=`<li>${i+2}</li>`;
        }
        $('#f1 .pages').html(html);
    }
})
//点击页码动态获取数据
$('#f1 .pages').on('click','li',function(e){
    product(this.innerHTML*9-9);
    this.className='active';
    $(this).siblings().removeClass('active');
})
//点击加入购物车
$('#section>.cellphone').on('click','.addCart',function(e){
    var pid=$(this).attr('data-pid');
    var uid=sessionStorage['uid'];
    $.ajax({
        type:'POST',
        url:'addCart',
        data:{pid:pid,uid:uid},
        success:function(result){
            if(result.code==1){
                alert('购物车新增一个商品')
            }else if(result.code==2){
                alert('数量+1')
            }else {
                alert('添加失败')
            }
        }
    })
})
//模糊查询
$('#search').on('keyup', function (e) {
    var kw=this.value;
    if(kw!=''){
        $.ajax({
            type:'POST',
            url:'searchKeyWords',
            data:{kw:kw},
            success: function (result) {
                console.log(result);
                if(result.length==0){
                    $('#nav>div>ul').css('display','none')
                }else{
                (result.length>5)&&(result.length=5);
                var html='';
                for(var i=0;i<result.length;i++){
                    html+=` <li>${result[i].pname}</li>`;
                }
                $('#nav>div>ul').html(html);
                $('#nav>div>ul').css('display','block')}
            }
        })
    }else{$('#nav>div>ul').css('display','none')}

})
$('#search').on('blur', function () {
    $('#nav>div>ul').css('display','none')
})