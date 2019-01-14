window.onscroll=function(){
    var d=document.documentElement.scrollTop || document.body.scrollTop
    console.log(d);
    var head=document.getElementById("head")
    if(d>500){
        head.style.position="fixed";
        head.style.top="0";
        head.style.zIndex="999";
    }else{
        head.style.position="static";
    }

    // 万能遥控器部分
    var co2=document.getElementById("co2")
    var tu2=document.getElementById("tu2")
    var ck2=document.getElementById("ck2")
    if(d>420 && d<850){
        co2.style.animation="myco3 2s forwards";
        tu2.style.animation="myzn 2s forwards";
        ck2.style.animation="mym3 2s forwards";
    }

    // 智能门锁
    var co3=document.getElementById("co3")
    var tu3=document.getElementById("tu3")
    var ck3=document.getElementById("ck3")
    if(d>950 && d<1580){
        co3.style.animation="myco3 2s forwards";
        tu3.style.animation="myzn 2s forwards";
        ck3.style.animation="mym3 2s forwards";
    }

    // 智能开关
    var co4=document.getElementById("co4")
    var ck4=document.getElementById("ck4")
    var img1=document.getElementById("img1")
    var img2=document.getElementById("img2")
    var img3=document.getElementById("img3")
    var img4=document.getElementById("img4")
    if(d>1700  && d<2300){
        co4.style.animation="myco3 2s forwards";
        ck4.style.animation="mym3 2s forwards";
        img1.style.animation="img1 2s forwards";
        img2.style.animation="img2 2s forwards";
        img3.style.animation="img3 2s forwards";
        img4.style.animation="img4 2s forwards";
    }

    //安防监控
    var co5=document.getElementById("co5")
    var tu5=document.getElementById("tu5")
    var ck5=document.getElementById("ck5")
    if(d>2450 && d<3200){
        co5.style.animation="myco3 2s forwards";
        tu5.style.animation="myzn 2s forwards";
        ck5.style.animation="mym3 2s forwards";
    }


    // 电动窗帘
    var co6=document.getElementById("co6")
    var tu6=document.getElementById("tu6")
    var ck6=document.getElementById("ck6")
    if(d>3300 && d<3800){
        co6.style.animation="myco3 2s forwards";
        tu6.style.animation="myzn 2s forwards";
        ck6.style.animation="mym3 2s forwards";
    }

    // 影音家电
    var co7=document.getElementById("co7")
    var ck7=document.getElementById("ck7")
    var imgtu1=document.getElementById("imgtu1")
    var imgtu2=document.getElementById("imgtu2")
    if(d>4200 && d<4680){
        co7.style.animation="myco3 2s forwards";
        ck7.style.animation="mym3 2s forwards";
        imgtu1.style.animation="img1 2s forwards";
        imgtu2.style.animation="img2 2s forwards";
    }

    // 尾部
    var assist=document.getElementById("assist")
    var dexter=document.getElementById("dexter")
    var bu=document.getElementById("bu")
    if(d>4800 ){
        assist.style.animation="myco3 .8s linear";
        assist.style.visibility="visible";
        dexter.style.animation="mym3 .8s linear";
        dexter.style.visibility="visible";
        bu.style.animation="mybu .8s forwards";
    }
}
