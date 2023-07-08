var cursor = document.getElementById('cursor');
window.addEventListener("mousemove", function (dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
}) 
 
let navi = document.querySelector(".navigation");
navi.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        scale:4
    })
    
    gsap.to('.navigation nav ul li a ',{
        color:"white"
    })
})


navi.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:1
        
    })
    gsap.to('.navigation nav ul li a ',{
        color:"black"
    })
})

let content = document.querySelector('.content');

const lerp =(x,y,a)=>
    x*(1-a)+y*a;

content.addEventListener("mousemove",function(dets){

let dims = content.getBoundingClientRect();
let xstart=dims.x;
let xend = dims.x+dims.width;

 var z= gsap.utils.mapRange(xstart,xend,0,1,dets.x);

    gsap.to(cursor,{
        scale:9
    })
    gsap.to('.content h2',{
        color:"white",
    })
    
    gsap.to('.content h2',{
x:lerp(-20,30,z),
duration:.3    })
})

content.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:1
    })
    gsap.to('.content h2',{
        color:"black"
    })
    
    gsap.to('.content h2',{
x:0    })
})
