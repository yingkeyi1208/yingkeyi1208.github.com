/**
 * Created by Administrator on 2016/10/6.
 */
$(function () {
    //tab中间切换开始
    $(".rb_title ul li").mouseover(function () {
        var $this = $(this);
        index = $this.index();
        $this.addClass("active").siblings("li").removeClass("active");
        $('.tab_content div').eq(index).addClass("selected").siblings("div").removeClass("selected");
    })
    //tab中间切换结束

    //tab下面切换开始
    $(".bot_tab ul li").mouseover(function () {
        var $this = $(this);
        index = $this.index();
        $this.addClass("active").siblings("li").removeClass("active");
        $(".tab_bot div").eq(index).addClass("selected").siblings("div").removeClass("selected");
    })
    //tab下面切换结束

    //左侧icon开始
    $(".icon_img ul li").mouseover(function () {
        var $this = $(this);
        index = $this.index();
        $(".icon_box div").eq(index).show().siblings("div").hide();
        $(".icon_img ul li").mouseout(function () {
            var $this = $(this);
            index = $this.index();
        $(".icon_box div").eq(index).mouseover(function () {
            $(this).show();
        })
            $(".icon_box div").eq(index).hide();
        })
        $(".icon_box div").eq(index).mouseout(function () {
            $(this).hide();
        })
    })

    $(".icon_box div").mouseover(function () {
        $(this).show().siblings("div").hide();
    })
    //左侧icon结束

    //下拉距离左侧icon出现开始
    $(function () {
        $(window).scroll(function () {
            if($(document).scrollTop() > 150) {
                $(".icon_img").fadeIn();
            }else {
                $(".icon_img").fadeOut();
            }
            console.log($(document).scrollTop());
            //console.log($(".icon_img ul li").offset().top);
            //TOP = $(document).scroll();
        })
    })
    //下拉距离左侧icon出现结束
    //下拉搜索框出现开始
    $(function () {
        $(window).scroll(function () {
            console.log($(document).scrollTop());
            if($(document).scrollTop() > 700) {
                $(".banner").fadeIn();
            }else {
                $(".banner").fadeOut();
            }
        })
    })
    //下拉搜索框出现结束
    //轮播图特效
    var imgBox = document.getElementById("img_box");
    var circleBox = document.getElementById("circle_box");
    var arrowBox = document.getElementById("arrow_box");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var leader = 0,target = 0,num = 0,i = 0;
    var timer1 = null,timer2= null,timer3 = null,timer4 = null;
    $("#img_box").mouseenter(function(){
        $("#arrow_box").fadeIn().css("display","block");
    });
    $("#img_box").mouseout(function(){
        $("#arrow_box").fadeOut().css("display","none");
    });
    $("#arrow_box").mouseenter(function(){
        $("#arrow_box").css("display","block")
    });

    function autoPlay(){
        i = i + 1;
        if(i > 7){
            i = 0;
        }
        $(".box .circle10 li").eq(i).addClass("current").siblings("li").removeClass("current");
        $(".box ul li").eq(i).fadeIn("fast").siblings("li").fadeOut();
    }
    timer1 = setInterval(autoPlay,5000);
    $(".box .circle10 li").mouseenter(function(){
        $(this).addClass("current").siblings("li").removeClass("current");
        $(".box ul li").eq($(this).index()).fadeIn("fast").siblings("li").fadeOut();
        i = $(this).index();
    });
    $("#left").click(function(){
        i = i - 1;
        if(i < 0){
            i = 7;
        }
        $(".box .circle10 li").eq(i).addClass("current").siblings("li").removeClass("current");
        $(".box ul li").eq(i).fadeIn("fast").siblings("li").fadeOut();

    });
    $("#right").click(function(){
        i = i + 1;
        if(i > 7){
            i = 0;
        }
        $(".box .circle10 li").eq(i).addClass("current").siblings("li").removeClass("current");
        $(".box ul li").eq(i).fadeIn("fast").siblings("li").fadeOut();

    })
//畅品闪购部分特效
    var num = 0;
    var change = function(){
        if(num == 0){
            $(".circles li").eq(num).css("background-color","#ff2832").siblings().css("background-color","#c8c8c8");
            $(".seller_item").eq(num).css("display","block").siblings().css("display","none");
            num = 1;
        }else if(num == 1){
            $(".circles li").eq(num).css("background-color","#ff2832").siblings().css("background-color","#c8c8c8");
            $(".seller_item").eq(num).css("display","block").siblings().css("display","none");
            num = 0;
        }
    };

    var t1 = setInterval(change,2000);

    //    2.鼠标放按钮上时停止滚动并关联换页,鼠标离开后又自动滚动
    $(".circle li").mouseenter(function(){
        clearInterval(t1);
        $(this).css("background-color","#ff2832").siblings().css("background-color","#c8c8c8");
        $(".seller_item").eq($(this).index()).css("display","block").siblings().css("display","none");
    }).mouseleave(function(){
        t1 = setInterval(change,2000);
    });
    $(".seller_item").mouseenter(function(){
        clearInterval(t1);
    }).mouseleave(function(){
        t1 = setInterval(change,2000);
    });



//图书电子书部分---内容与标题关联设置
    $(function(){
        //中间部分的标题与内容关联设置
        $(".lists_style").mouseenter(function(){
            $(this).addClass("cate_mouseon").siblings().removeClass("cate_mouseon");
            $(".books_show").children().eq($(this).index()).show().siblings().hide();
        });
        //右侧边栏部分的标题与内容关联设置
        $(".title_items").mouseenter(function(){
            $(this).addClass("title_show").siblings().removeClass("title_show");
            $(".aside_body").children().eq($(this).index()).show().siblings().hide();
        });
        //右侧边栏上内容的鼠标事件设置(鼠标移上去时字体变红,移开时又恢复原样)
        $(".b_desc").mouseover(function(){ $(this).children().addClass("b_body_hv");})
            .mouseout(function(){$(this).children().removeClass("b_body_hv");});

        //右侧边栏上 列表项vs鼠标自动跟随
        //右侧边栏上 列表项vs鼠标自动跟随
        $(".best_seller_list1 li.sm").mouseenter(function(){
            //console.log($(this).index());
            $(".best_seller_list1 li").eq($(this).index()+1).addClass("dli").removeClass("hide").siblings(".lg").addClass("hide").removeClass("dli");
            $(".best_seller_list1 li").eq($(this).index()).addClass("hide").removeClass("dli").siblings(".sm").addClass("dli").removeClass("hide");
        });
        $(".best_seller_list2 li.sm").mouseenter(function(){
            $(".best_seller_list2 li").eq($(this).index()+1).addClass("dli").removeClass("hide").siblings(".lg").addClass("hide").removeClass("dli");
            $(".best_seller_list2 li").eq($(this).index()).addClass("hide").removeClass("dli").siblings(".sm").addClass("dli").removeClass("hide");
        });
    });
    //服装部分特效
    $(".clothing_product .clothing_head .right div").mouseenter(function(){
        var $this = $(this);
        var index = $this.index();
        console.log(index);
        $this.addClass("active").siblings("div").removeClass("active");
        $(".clothing_content .show").children().eq(index).addClass("selected").siblings("div").removeClass("selected");
    })
})

