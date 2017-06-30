/**
 * Created by Administrator on 2017/6/9.
 */
$('#header').load('data/header.html');
$('#footer').load('data/footer.html');
function showCart(){
    var uid=sessionStorage['uid'];
    $.ajax({
        type:'POST',
        url:'cart',
        data:{uid:uid},
        success:function(result){
            console.log(result)
            var html='';
            var total=0;
            for(var i=0;i<result.length;i++){
                total+=result[i].pdetail[0].price*result[i].count;
                html+=`
            <tr>
                    <td>${i+1}</td>
                    <td>
                    <img src="${result[i].pdetail[0].pic}" alt=""/>
                    <span>${result[i].pdetail[0].pname}</span>
                    </td>
                    <td>￥${result[i].pdetail[0].price}</td>
                    <td class="count">
                        <b>-</b>
                        <span data-pid="${result[i].pid}">${result[i].count}</span>
                        <b>+</b>
                    </td>
                    <td>￥${result[i].pdetail[0].price*result[i].count}</td>
                    <td><button data-cid="${result[i].cid}">删除</button></td>
                </tr>
            `;
            }
            html+=` <tr>
                    <td colspan="3"></td>
                    <td>总计：</td>
                    <td>${total}</td>
                    <td></td>
                </tr>`;
            $('#section tbody').html(html);
        }
    });
}
showCart();
$('#section tbody').on('click','button',function(e){
    var cid=$(this).attr('data-cid');
    $.ajax({
        type:'POST',
        url:'delete',
        data:{cid:cid},
        success:function(result){
           if(result.code==1)
               showCart();
        }
    })
})
//count--
    $('#section tbody').on('click',".count>b:contains('-')",function(){
          var count=parseInt($(this).next().html());
        var uid=sessionStorage['uid'];
        var pid=$(this).next().attr('data-pid');
            if(count>1){
                $.ajax({
                    type:'POST',
                    url:'reduce',
                    data:{uid:uid,pid:pid},
                    success:function(result){
                        if(result.code==1){
                            showCart();
                        }
                    }
                })
            }
    })
//count++
$('#section tbody').on('click',".count>b:contains('+')",function(){
    var count=parseInt($(this).prev().html());
    var uid=sessionStorage['uid'];
    var pid=$(this).prev().attr('data-pid');
        $.ajax({
            type:'POST',
            url:'increase',
            data:{uid:uid,pid:pid},
            success:function(result){
                if(result.code==1){
                    showCart();
                }
            }
        })
})