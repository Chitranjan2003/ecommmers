
 function home(){
 var tl = gsap.timeline();
 tl
 .to("#loader",{
    delay : 2,
    duration : .5,
    y : "-100%",
    opacity : 1,
 })
 .to("#loader1",{
   duration : .4,
   height : "100%",
   opacity : 1,
   delay : -0.9
})
.to("#loader1",{
   duration : .4,
   height : "0%",
   top : "0",
   delay : -0.4,
   opacity : 1,
})
 .from("#nav1",{
    opacity : 0,
    y: "20px",
 })

.from("#nav",{
    opacity : 0,
    y : "20px"
 })
 .from("#center h1",{
    opacity : 0,
    scale : 1.5,
 })
 .from("#center img",{
    opacity : 0,
    scale : .5,
 })
 

 var overlay = document.querySelector(".overlay")
 var camera = document.querySelector("#camera")
 
 flag = 1
 camera.addEventListener("click",function(){
    if(flag == 1){
       overlay.style.opacity = "1"
       overlay1.style.opacity = "0"
       login.style.opacity = "0"
       overlay.style.left = "80%"
       flag=0
    }else{
       overlay.style.opacity = "0"
       flag=1
    }
 })
 var overlay1 = document.querySelector(".overlay1")
 var mic = document.querySelector("#mic")
 flag1 = 1
 mic.addEventListener("click",function(){
    if(flag1 == 1){
     overlay1.style.opacity = "1"
     overlay1.style.left = "88%"
     overlay.style.opacity = "0"
     login.style.opacity = "0"
     flag1 = 0
    }else{
     overlay1.style.opacity = "0"
     flag1 = 1
    }
 })
 var login = document.querySelector(".login")
 var loginbtm = document.querySelector("#login")
 flag2 = 1
 loginbtm.addEventListener("click",function(){
    if(flag2 == 1){
     login.style.opacity = "1"
     overlay.style.opacity = "0"
     overlay1.style.opacity = "0"
     login.style.left = "75%"
     flag2 = 0
    }else{
     login.style.opacity = "0"
     flag2 = 1
    }
 }) 
}
function review(){
var revw1 = document.querySelector("#review1") ;
var revw2 = document.querySelector("#review2") ;
var revw3 = document.querySelector("#review3") ;
var jinni = document.querySelector(".jinni");
var jini = document.querySelector(".jini");
var rohit = document.querySelector(".rohit");
jinni.addEventListener("mousemove",function(){
     revw1.style.opacity = "1";
})
jinni.addEventListener("mouseleave",function(){
   revw1.style.opacity = "0";
})

rohit.addEventListener("mousemove",function(){
   revw2.style.opacity = "1";
})
rohit.addEventListener("mouseleave",function(){
 revw2.style.opacity = "0";
})
jini.addEventListener("mousemove",function(){
   revw3.style.opacity = "1";
})
jini.addEventListener("mouseleave",function(){
 revw3.style.opacity = "0";
})
}
function home1(){
var tl2 = gsap.timeline({
   scrollTrigger:{
      trigger : "#home1",
      scroll : "body",
      start : "top 60%",
   }
})
tl2.to("#home1 h1",{
   left : "50%",
   opacity : 1,
})
}

function home2(){
   var tl2 = gsap.timeline({
      scrollTrigger:{
         trigger : "#home2",
         scroll : "body",
         start : "top 60%",
      }
   })
   tl2.to("#home2 h1",{
      left : "50%",
      opacity : 1,
   })
   }
   function home3(){
      var tl2 = gsap.timeline({
         scrollTrigger:{
            trigger : "#home3-head",
            scroll : "body",
            start : "top 60%",
         }
      })
      tl2.to("#home3-head h1",{
         left : "50%",
         opacity : 1,
      })
      .to("#home3 h1",{
         opacity : 1,
         scale : 1,
         duration : .5
      })
      .to(".left p",{
         opacity : 1 ,
         left : "6%"
      })
      .to(".left h2",{
         opacity : 1 ,
         left : "45%",
         top : "40%"
      })
      .to(".jhola",{
        opacity : 1,
        left : "7%",
     })
      .to(".jhola img",{
         scale : 1.5,
         opacity : 1,
      })
      .to(".background",{
         top : "50%",
          ease: "bounce.out",
        duration: 2,
        opacity: 1,
        delay : -1.5
       })
      }
      function home4(){
         var tl2 = gsap.timeline({
            scrollTrigger:{
               trigger : "#home4-head",
               scroll : "body",
               start : "top 60%",
            }
         })
         tl2.to("#home4-head h1",{
            left : "50%",
            opacity : 1,
         })
         tl2.to(".phone",{
           top : "50%",
            ease: "bounce.out",
          duration: 1,
          opacity: 1,
         })
         .to(".display",{
            opacity:1,
            duration : 2,
         })
         .to(".right4 h1",{
            opacity:1,
            scale : 1,
            duration : .3,
            delay : -2
         })
         .to(".right4 p",{
            opacity :1,
         top : "40%",
         delay : -1.5,
         })
         .to(".right4 .download",{
            opacity :1,
         top : "40%",
         delay : -1.5,

         })

         }

home();
home1();
home2();
home3();
home4();
review();
head();

