/**
 * Created by 成 on 2017/2/7 0007.
 */
document.addEventListener('DOMContentLoaded',function(){

    var oBox=document.getElementById('box');
    var oU=document.querySelector('#box ul');
    var aLi=oU.children;
    //alert(aLi.length);

    //调整图片高度，适应屏幕
    (function(win,doc){
        function size(){
            oBox.style.height=doc.documentElement.clientHeight+'px';
            oBox.style.width=doc.documentElement.clientWidth+'px';
            for(var i=0;i<aLi.length;i++){
                aLi[i].style.height=doc.documentElement.clientHeight+'px';
                aLi[i].style.width=doc.documentElement.clientWidth+'px';
            }
        }
        size();
        win.addEventListener('resize',size,false);
    })(window,document);

//轮播图
    new Swiper('.swiper-container',{
        direction:'vertical'
    });

//  加音乐
    var aDiv=document.querySelectorAll('#box ul li .music');
    var oM=document.getElementById('mp3');
    var bOk=true;
    oM.style.display='none';
    //alert(aDiv.length);
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].onclick=function(){
           if(bOk){
               oM.play();
               bOk=false;
           }else {
               oM.pause();
               bOk=true;
           }
        };
    }

},false);