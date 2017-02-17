/**
 * Created by Administrator on 2016/10/4.
 */
window.onload = function () {
    //关闭顶部图片开始10.4.2016
        var closeTop = document.getElementById("closetop");
        var topImg = document.getElementById("topimg");
    var closeImg = function () {
        closeTop.onclick = function () {
            topImg.style.display = "none";
        }
    }
    setTimeout(closeImg, 100);
    //关闭顶部图片结束10.4.2016

    //产品盒子li开始
    var productsList = document.getElementById("products_list");
    var lis = productsList.childNodes[1].children;
    var totalBox = document.getElementById("total_box");
    var totalImg = document.getElementById("total_img");
    var rightBar = document.getElementById("right_bar");
    var productsBox = function () {
        for(var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                totalBox.style.display = "block";
                totalImg.style.display = "none";
                rightBar.style.display = "none";
                totalBox.onmouseover = function () {
                    totalBox.style.display = "block";
                    totalImg.style.display = "none";
                    rightBar.style.display = "none";

                }
            }
            lis[i].onmouseout = function () {
                totalBox.style.display = "none";
                totalImg.style.display = "block";
                rightBar.style.display = "block";
            }
            totalBox.onmouseout = function () {
                totalBox.style.display = "none";
                totalImg.style.display = "block";
                rightBar.style.display = "block";
            }
        }
    }
    setTimeout(productsBox, 100);
    //产品盒子li结束

    //轮播图下设置开始
    //var bottomLis = bottomImg.childNodes[1].childNodes[1].children;
        var bottomImg = document.getElementById("bottom_img");
        var shadow = document.getElementById("shadow");
        var shadowLis = shadow.childNodes[1].children;
    //移入变色开始
    var changeColor = function () {
        for(var i = 0; i < shadowLis.length; i++) {
            shadowLis[i].onmouseover = function () {
                //alert("123");
                this.style.backgroundColor = "rgba(0,0,0,0.01)";
            }
            shadowLis[i].onmouseout = function () {
                this.style.backgroundColor = "rgba(0,0,0,0.2)";
            }
        }
    }
    setTimeout(changeColor, 100);
    //移入变色结束

    //移入出现三角形开始
    var trangleL = document.getElementById("trangle_l");
    var trangleR = document.getElementById("trangle_r");
    var fadeTrangle = function () {
        bottomImg.onmouseover = function () {
            trangleL.style.display = "block";
            trangleR.style.display = "block";
        }
        bottomImg.onmouseout = function () {
            trangleL.style.display = "none";
            trangleR.style.display = "none";
        }
    }
    setTimeout(fadeTrangle, 100);
    //移入出现三角形结束

    var imgsBox = document.getElementById("imgs");
    var changeImg = function () {
        //轮播图下点击换页开始
        var num = 0;
        var s = -3168;
        var timer1 = null;
        var timer2 = null;
        //左按钮
        trangleL.onclick = function () {
            clearInterval(timer1);
            clearInterval(timer2);
            //alert("123");
            timer1 = setInterval(function () {
                s++;
                console.log(s);
                num = s;
                s< 0 ? s : s = -3168;
                imgsBox.style.left = s + "px";
                if(s % -795 == 0 || s == 0) {
                    clearInterval(timer1);
                }
            }, 1);
        }
        //右按钮
        trangleR.onclick = function () {
            clearInterval(timer1);
            clearInterval(timer2);
            timer2 = setInterval(function () {
                num--;
                console.log(num);
                s = num;
                num < -3168 ? num = 0 : num;
                imgsBox.style.left = num + "px";
                if(num % -795 == 0 || num == -3168) {
                    clearInterval(timer2);
                }
            }, 1);
        }
        //轮播图下点击换页结束
    }
    setTimeout(changeImg, 10);
    //轮播图下设置结束

    //跳出地址特效

        var area = document.getElementById("area");
        var adress = document.getElementById("adress_details");
        area.onmouseover = function(){
            adress.style.display = "block";
        };
        area.onmouseout = function(){
            adress.style.display = "none";
        }
//跳出相关地址特效结束


    //搜索框全部分类跳出关联特效
    var select= document.getElementById("select");
    var classify_details= document.getElementById("classify_details");
    select.onmouseover = function(){
        classify_details.style.display = "block";
        classify_details.onmouseover = function(){
            this.style.display = "block";
        };
        classify_details.onmouseout = function(){
            this.style.display = "none";
        }
    };
    select.onmouseout = function(){
        classify_details.style.display = "none";
    };



//最值当部分特效
    var liss = document.getElementById("most_procudt").getElementsByTagName("li");
    for(var i = 0;i < liss.length;i++){
        liss[i].onmouseover = function(){
            this.style.opacity = "0.5";
        }
        liss[i].onmouseout = function(){
            this.style.opacity = "1";
        }
    }



    //尾品汇特效
    var li = document.getElementsByClassName("currents");
    var img = document.getElementById("ul_list").getElementsByClassName("current_img");
    var zindex = 8;
    for(var i = 0;i < 10;i++){
        li[i].onmouseover = function(){
            zindex++;
            this.style.border = "2px solid #ff2832";
            this.style.zIndex = zindex;
        };
        li[i].onmouseout = function(){
            this.style.border = "none";
            this.style.borderRight = "1px solid #e6e6e6";
            this.style.borderBottom = "1px solid #e6e6e6";
            if(i > 4){
                this.style.zIndex = 4;
            }
        }
    }

    //服装底部轮播图特效
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var scroll1 = document.getElementById("scroll1");
    var arrowBox1 = document.getElementById("arrow_box1");
    var leader = 0, target = 0;
    var imgBox1 = document.getElementById("img_box1");
    var num = 0;
    var timer1 = null,timer2 = null,timer3 = null;
    function autoPlay(){
        num = num - 9;
        num <= -2395? num = 0 : num;
        imgBox1.style.left = num + "px";
        if(num % 1197 == 0){
            clearInterval(timer1);
            timer2 = setTimeout(function(){
                timer1 = setInterval(autoPlay, 10);
            },4000)
        }
    }
    timer1 = setInterval(autoPlay,10);
    scroll1.onmousemove = function(){
        arrowBox1.style.display = "block";
    };
    scroll1.onmouseout = function(){
        arrowBox1.style.display = "none"
    };
    var arrows = arrowBox1.getElementsByTagName("div");
    arrows[0].onclick = function(){
        target = target + 1197;
        timer3 = setInterval(function(){
            clearInterval(timer1);
            if(target <= -3591){
                target = 0;
            }else if(target > 0){
                target = -2394
            }
            leader = leader + (target - leader) / 10;
            imgBox1.style.left = leader + "px";
        },10);
        timer2=setTimeout(function(){
            clearInterval(timer3);
            timer1 = setInterval(autoPlay,10)
        },4000)
    };
    arrows[1].onclick = function(){
        target = target - 1197;
        timer3 = setInterval(function(){
            clearInterval(timer1);
            if(target <= -3591){
                target = 0;
            }else if(target > 0){
                target = -2394
            }
            leader = leader + (target - leader) / 10;
            imgBox1.style.left = leader + "px";
        },10);
        timer2=setTimeout(function(){
            clearInterval(timer3);
            timer1 = setInterval(autoPlay,10)
        },4000)
    };

//尾部特效
    var hpb1 = document.getElementById("hot_product_box01");
    var hpb2 = document.getElementById("hot_product_box02");
    var cprev = document.getElementById("cprev");
    var cnext = document.getElementById("cnext");
    var hpc = document.getElementById("hot_product_content");
    var br = document.getElementById("btn-right");
    var bl = document.getElementById("btn-left");
    var hpbchange = 0;
    var hpbtime = function () {
        if(hpbchange == 0){
            cprev.style.backgroundColor = "#ff2832";
            cnext.style.backgroundColor = "#c8c8c8";
            hpb1.style.display = "block";
            hpb2.style.display = "none";
            hpbchange ++;
            //console.log("sdfadf")
        }else if(hpbchange == 1){
            cnext.style.backgroundColor = "#ff2832";
            cprev.style.backgroundColor = "#c8c8c8";
            hpb2.style.display = "block";
            hpb1.style.display = "none";
            hpbchange = 0;
            //console.log("hhhhhh")
        }
    }
    var hpbt = setInterval(hpbtime,3000);


    hpc.onmouseenter= function () {
        br.style.display = "block";
        bl.style.display = "block";

        clearInterval(hpbt);
    }

    hpc.onmouseleave = function () {
        br.style.display = "none";
        bl.style.display = "none";
        hpbt = setInterval(hpbtime,3000);
    }


//    icon点击跳转开始
    var iconImg = document.getElementById("icon_img");
    //console.log(iconImg.childNodes[1].children);
    var liImg = iconImg.childNodes[1].children;
    var liImgs = iconImg.getElementsByTagName("img");
    //console.log(liImg[0]);
    //console.log(liImgs[0]);
    //console.log(screenTop);
    for(var i = 0; i < liImgs.length; i++) {
        liImgs[i].onclick = function () {
            var j = this.indexOf;
            //alert("123");
            this.screenTop = 700 * 2;
            console.log(this.screenTop);
        }
    }
//    icon点击跳转结束

}