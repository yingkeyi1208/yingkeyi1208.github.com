/**
 * Created by Administrator on 2016/10/6.
 //*/
window.onload = function () {
    //innerhtml设置开始
    var loginR = document.getElementById("login_r");
    //console.log(loginR);
    var input1 = loginR.childNodes[5];
    //console.log(input1);
    var div1 = loginR.childNodes[7];
    //console.log(div1);
    input1.onfocus = function () {
        div1.innerHTML = "请输入邮箱/昵称/手机号码";
    }
    input1.onblur = function () {
        div1.innerHTML = "";
    }
    //console.log(loginR.childNodes[9]);
    var input2 = loginR.childNodes[9];
    //console.log(loginR.childNodes[11]);
    var div2 = loginR.childNodes[11];
    input2.onfocus = function () {
        div2.innerHTML = "请填写长度为6-20个字符的密码";
    }
    input2.onblur = function () {
        div2.innerHTML = "";
    }
    //innerhtml设置结束
    
    //checkbox勾选开始
    var cBox = document.getElementById("c_box");
    console.log(cBox.childNodes[1].children[1].textContent);
    cBox.onclick = function () {
        if(cBox.childNodes[1].children[1].textContent == "请勿在公共电脑上勾选此选项") {
            cBox.childNodes[1].children[1].innerHTML = "七天内自动登录";
        }else if(cBox.childNodes[1].children[1].textContent == "七天内自动登录") {
            cBox.childNodes[1].children[1].innerHTML = "请勿在公共电脑上勾选此选项";
        }
    }
    //checkbox勾选结束    
}