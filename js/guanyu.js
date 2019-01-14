window.onscroll=function(){
    var d=document.documentElement.scrollTop || document.body.scrollTop
    console.log(d);

    var img1=document.getElementById("img1");
    var p1=document.getElementById("p1");
    if(d>0&& d<500){
        img1.style.animation="myimg1 1s linear forwards";
        p1.style.animation="myp1 1s linear forwards";
    }else{
        img1.style.animation=null;
        p1.style.animation=null;
    }

    var left=document.getElementById("lf")
    var right=document.getElementById("ri")
    if(d>500 && d<1000){
        left.style.animation="myco3 1s linear forwards";
        right.style.animation="mym3 1s linear forwards";
    }else{
        left.style.animation=null;
        right.style.animation=null;
    }

    var amH=document.getElementById("am-h")
    var amP=document.getElementById("am-p")
    var aul=document.getElementById("aul")
    if(d>1000 && d<1600){
        amH.style.animation="myco3 1s linear forwards";
        amP.style.animation="mym3 1s linear forwards";
        aul.style.animation="myp1 1.2s linear forwards";
    }else{
        amH.style.animation=null;
        amP.style.animation=null
        aul.style.animation=null;
    }

    // 生态合作
    var st=document.getElementById("st")
    var hz=document.getElementById("hz")
    if(d>1560 && d<2060){
        st.style.animation="myimg1 .5s linear forwards";
        hz.style.animation="myp1 .5s linear forwards";
    }else{
        st.style.animation=null;
        hz.style.animation=null;
    }



    var assist=document.getElementById("assist")
    var dexter=document.getElementById("dexter")
    var di=document.getElementById("di")
    if(d>2300 && d<2500 ){
        assist.style.animation="myco3 1s linear forwards" ;
        dexter.style.animation="mym3 1s linear forwards";
        di.style.animation="myp1 1s linear forwards";
    }else{
        assist.style.animation=null ;
        dexter.style.animation=null;
        di.style.animation=null;
    }

}

