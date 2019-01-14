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



    // var li1=document.getElementById("li1")
    // // var li2=document.getElementById("li2")
    // // var li3=document.getElementById("li3")
    // // var li4=document.getElementById("li4")
    // if(d>230 && d<350 ){
    //     li1.style.animation="img1 2s forwards ease-in-out";
    //     li2.style.animation="img2 2s forwards ease-in-out" ;
    //     li3.style.animation="img3 2s forwards ease-in-out";
    //     li4.style.animation="img4 2s forwards ease-in-out";
    // }

    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    if(d>530 && d<1100){
        p1.style.animation="myp1 0.5s linear";
    }else{
        p1.style.animation=null;
    }
    if(d>580 && d<1100){
        p2.style.animation="myp2 0.6s linear";
    }else{
        p2.style.animation=null;
    }

    var ying=document.getElementById("ying")
    if(d>700){
        ying.style.animation="myy 1.2s linear forwards";

    }

    var p3=document.getElementById("p3")
    if(d>1500&&d<2000){
        p3.style.animation="myp3 1.2s linear";
    }else{
        p3.style.animation=null;
    }

    var slide=document.getElementById("swiper-container2")
    var p4=document.getElementById("p4")
    if(d>1600&&d<2200){
        p4.style.animation="fadeInDown 0.6s linear";
        p4.style.visibility="visible";
        slide.style.animation="myp1 1s linear";
        slide.style.visibility="visible";
    }else{
        p4.style.animation=null;
        slide.style.animation=null;
    }

    var ji=document.getElementById("ji")
    var jiLeft=document.getElementById("ji-left")
    var jiRight=document.getElementById('ji-right')
    if(d>2500 && d<2900){
        ji.style.animation="ji .6s linear";
        ji.style.visibility="visible";
        jiLeft.style.animation="jileft .8s linear";
        jiLeft.style.visibility="visible";
        jiRight.style.animation="jiright .8s linear";
        jiRight.style.visibility="visible";
    }else{
        ji.style.animation=null;
        jiLeft.style.animation=null;
        jiRight.style.animation=null;
    }

    var assist=document.getElementById("assist")
    var dexter=document.getElementById("dexter")
    var bu=document.getElementById("bu")
    if(d>3200 ){
        assist.style.animation="jileft .8s linear";
        assist.style.visibility="visible";
        dexter.style.animation="jiright .8s linear";
        dexter.style.visibility="visible";
        bu.style.animation="mybu .8s forwards";
    }
}
