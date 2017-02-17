window.onload=function(){
	var a1=document.getElementById("a1");
	var a2=document.getElementById("a2");
	var i=document.getElementsByTagName("i");
	var em=document.getElementsByTagName("em");
	var navchild=document.getElementById("navchild");
	var dd=document.getElementById("dd");
	var d1=document.getElementById("d1");
	var yg=document.getElementById("yg");
	var ygd=document.getElementById("ygd");
	var gg=document.getElementById("gg");
	var zq=document.getElementById("zq");
	var ul1=document.getElementById("ul1");
	var ul2=document.getElementById("ul2");
	a1.onmouseover=function(){
		//i[0].style.top=15+'px';
		em[0].style.top=0+'px';
		navchild.style.display="block";
	}
	a2.onmouseover=function(){
		i[1].style.top=15+'px';
		em[1].style.top=0+'px';
	}
	a1.onmouseout=function(){
		//i[0].style.top=15+'px';
		em[0].style.top=-6+'px';
		navchild.style.display="none";
	}
	a2.onmouseout=function(){
		//i[0].style.top=15+'px';
		em[1].style.top=-6+'px';
	}
	d1.onmouseover=function(){
		dd.style.display="block";
		//i[2].style.top=15+'px';
		em[2].style.top=0+'px';
	}
	d1.onmouseout=function(){
		dd.style.display="none";

		em[2].style.top=-6+'px';
	}
	yg.onmouseover=function(){
		//i[3].style.top=15+'px';
		em[3].style.top=0+'px';
		ygd.style.display="block";
	}
	yg.onmouseout=function(){
		ygd.style.display="none";

		em[3].style.top=-6+'px';
	}
	gg.onmouseover=function(){

		ul1.style.display="block";
		ul2.style.display="none";
	}
	zq.onmouseover=function(){
		ul1.style.display="none";
		ul2.style.display="block";
	}
	//楼层滚动
	var search=$(".search")[0];
    var flag=true;
    var flag1=true;//0--440  440-3000
    var floors=$(".float1boxs");

	var jump=$(".jump")[0];
    var btn=$("li",jump);
    //alert(floors[1].offsetTop)

	//按钮控制滚动条
    for(var i=0;i<btn.length;i++){
        btn[i].index=i;
        btn[i].onclick=function(){
            //alert(floors[this.index].t)
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象

            animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
        }
    }

    window.onscroll=function(){
     	//搜索框的显示与隐藏
     	var scrollT=getScrollT();
     	if(scrollT>=700){
     		if(flag){//为了保证页面往下拉时只有一个animate函数执行
     			animate(search,{top:0},500);
     			flag=false;
     			flag1=true;
     		}
     	}else{
            if(flag1){
                animate(search,{top:-50});
                flag1=false;
                flag=true;
            }
     	}


     	//楼层跳转
	    if(scrollT>=1100&&scrollT<=6500){
	        jump.style.display="block";
	    }else{
	        jump.style.display="none";
	    }
		//滚动条控制按钮
        for(var i=0;i<floors.length;i++){
            floors[i].t=floors[i].offsetTop;//
            if(floors[i].t-200<scrollT){//如果scrollTop大于当前楼层的top
            	//alert(11111)
            	for(var j=0;j<btn.length;j++){
            		btn[j].style.color="black";
            		btn[j].style.background="#fafbfc";
            	}
            	btn[i].style.color="#fff";
            	btn[i].style.background="#ff6000";
            }
            
        }
    }



    //顶部下拉二级
    var yiji=getClass("yiji");
  	var erji=getClass("erji");
	for(var i=0;i<yiji.length;i++){
		yiji[i].a=i;
		yiji[i].onmouseover=function(){
			var son=getFirst(erji[this.a]);
			var dh=parseInt(getStyle(son,"height"));
			animate(erji[this.a],{height:dh},200,Tween.Linear);
			erji[this.a].style.border="1px solid #f0f0f0";
			erji[this.a].style.borderTop="0";	
		}
		yiji[i].onmouseout=function(){
			animate(erji[this.a],{height:0},200,Tween.Linear);
			erji[this.a].style.border="0px";
		}
	}

    //右侧导航
    var rightnav1=$(".rightnav1");
    var huachu=$(".huachu");
    for(var i=0;i<rightnav1.length;i++){
    	rightnav1[i].index=i;
    	rightnav1[i].onmouseover=function(){
	    	for(var j=0;j<huachu.length;j++){
	    		animate(huachu[j],{width:0},100,Tween.Linear);
	    	}
	    	animate(huachu[this.index],{width:80},100,Tween.Linear);
	    }
	    rightnav1[i].onmouseout=function(){
	    	for(var j=0;j<huachu.length;j++){
	    		animate(huachu[j],{width:0},10,Tween.Linear);
	    	}
	    }
    }
    /*var rn9=$(".rn9")[0];
    rn9.onclick=function (){
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	animate(obj,{scrollTop:0})
    }*/
   	
   

    var rightnav=getClass("rightnav")[0];
    var ch=document.documentElement.clientHeight;
    rightnav.style.height=ch+"px";

	var tex=getClass("tex");
	for(var i=0;i<tex.length;i++){
		tex[i].index=i;
		tex[i].onfocus=function(){
			//表单获得焦点
			if(tex[this.index].value=="猫猫狗狗购物狂欢，给它最好的"){
				tex[this.index].value="";
			}
		}
		tex[i].onblur=function(){
		//表单失去焦点
			if(tex[this.index].value){

			}else{
				tex[this.index].value="猫猫狗狗购物狂欢，给它最好的";
			}
		}
	}

	var yanse=["#F42722","#22C3B3","#F01E41","#F01E41","#FD671B","#7D1DFB"];
	var bannerwai=getClass("bannerwai")[0];
	var imgs=getClass("bannerimg");
	var an=getClass("lunbo");
	var t=setInterval(a,3000);
	var num=1;
	function a(){
		if(num==6){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			an[i].style.background="#ccc";
		}
		imgs[num].style.zIndex=2;
		an[num].style.background="#ff6000";
		bannerwai.style.background=yanse[num];
		num++;
		
	}

	//banner菜单
    var yanse1=["","#fff701","#b917f8","#73eac4","#e0e0e0","#e0e0e0","#e0e0e0","#b917f8","#fff701","#e0e0e0","#e0e0e0","#73eac4","#fff701","#e0e0e0","#b917f8","#e0e0e0"];
    var xiao1=getClass("xiao1");
    var caidanb=$(".caidanb");
    var bannerwai1=getClass("bannerwai1")[0];
    var caidans=$(".caidans");
    for(var i=0;i<caidanb.length;i++){
    	caidanb[i].index=i;
    	caidanb[i].onmouseover=function(){
	    	animate(caidanb[this.index],{paddingLeft:30},150,Tween.Linear);
	    	for(var j=0;j<ind.length;j++){
				xiao1[j].style.display="none";
			}
			//bannerwai1.style.background=yanse1[this.index];
			xiao1[this.index].style.display="block";
			caidans[this.index].style.display="block";
	    }
	    caidanb[i].onmouseout=function(){
	    	animate(caidanb[this.index],{paddingLeft:18},50,Tween.Linear);
			xiao1[this.index].style.display="none";
			bannerwai1.style.background="";
    		caidans[this.index].style.display="none";
	    }
    }
    for(var j=0;j<caidans.length;j++){
		caidans[j].a=j;
		caidans[j].onmouseover=function(){
			caidans[this.a].style.display="block";
		};
		caidans[j].onmouseout=function(){
			caidans[this.a].style.display="none";
		};
	}


	for(var i=0;i<an.length;i++){
		an[i].index=i;
		an[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				an[j].style.background="#ccc";
			}
			bannerwai.style.background=yanse[this.index];
			imgs[this.index].style.zIndex=2;
			an[this.index].style.background="#ff6000";
		}
		an[i].onmouseout=function(){
			t=setInterval(a,1500);
			num=this.index;
		}
	}

	//换一换
	var word=getClass("word");
	var ind=getClass("contentone-maincen");
	var huanyipi=$("#huanyipi");
	for(var i=0;i<word.length;i++){
		word[i].index=i;//index保存相应对象的i值
		word[i].onclick=function(){
			for(var j=0;j<ind.length;j++){
				ind[j].style.display="none";
				word[j].style.fontWeight="normal";
				word[j].style.borderBottom="0px";
				word[j].style.color="#666";
			}
			ind[this.index].style.display="block";
			word[this.index].style.fontWeight="bold";
			word[this.index].style.borderBottom="2px solid black";
			word[this.index].style.color="#000";
		}
		huanyipi.onclick=function(){
			for(var j=0;j<ind.length;j++){
				ind[j].style.display="none";
			}
			ind[parseInt(Math.random()*3)].style.display="block";
		}
	}






	var rightshe=getClass("rightshe");
	for(var i=0;i<rightshe.length;i++){
		rightshe[i].index=i;
		rightshe[i].onmouseover=function(){
			rightshe[this.index].style.left="1px";
		}
		rightshe[i].onmouseout=function(){
			rightshe[this.index].style.left="0px";
		}
	}
	var rightshe1=getClass("rightshe1");
	for(var i=0;i<rightshe1.length;i++){
		rightshe1[i].index=i;
		rightshe1[i].onmouseover=function(){
			rightshe1[this.index].style.left="1px";
		}
		rightshe1[i].onmouseout=function(){
			rightshe1[this.index].style.left="0px";
		}
	}
	
	//轮播
	lunbo(0);
	lunbo(1);
	lunbo(2);
	lunbo(3);
	lunbo(4);
	lunbo(5);

	
}