window.onscroll=function(){
    var d=document.documentElement.scrollTop || document.body.scrollTop
    console.log(d);

    var bp=document.getElementById("bp")
    var sP=document.getElementById("shipin")
    if(d>800 && d<1550){
        bp.style.animation="myb 1.2s forwards ";
        bp.style.visibility="visible";
        sP.style.animation="myshipin 2s forwards ";
        sP.style.visibility="visible";
    }else{
        bp.style.animation=null;
        bp.style.visibility=null;
        sP.style.animation=null;
        sP.style.visibility=null;
    }

    var pxu=document.getElementById("pxu")
    var ul=document.getElementById("ul1")
    if(d>1650 && d<2320){
        pxu.style.animation="mypx 1.2s forwards ";
        pxu.style.visibility="visible";
        ul1.style.animation="myul 1.2s forwards ";
        ul1.style.visibility="visible";
    }else{
        pxu.style.animation=null;
        pxu.style.visibility=null;
        ul1.style.animation=null;
        ul1.style.visibility=null;
    }

    var assist=document.getElementById("assist")
    var dexter=document.getElementById("dexter")
    var bu=document.getElementById("bu1")
    if(d>2300 ){
        assist.style.animation="myco3 1s linear";
        assist.style.visibility="visible";
        dexter.style.animation="mym3 1s linear";
        dexter.style.visibility="visible";
        bu.style.animation="mybu 1.2s forwards";
    }

}
window.onload=function(){
    var act=document.getElementsByClassName("act");
    var ulStyle=document.getElementsByClassName("ulstyle");
    for(var i=0;i<act.length;i++){
        act[i].index=i;
        act[i].onclick=function(){
            for(var j=0;j<ulStyle.length;j++){
                act[j].style.color="#757575";
                act[j].style.fontSize="14px";
                ulStyle[j].style.display="none"
            }
            ulStyle[this.index].style.display="block"
            act[this.index].style.color="#424242";
            act[this.index].style.fontSize="16px";
            console.log(this.index);
        }
    }
}
