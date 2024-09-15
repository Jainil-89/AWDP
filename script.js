let box = document.querySelector(".box");
let div = document.querySelector(".cur");
let cont = document.querySelector(".cont");


box.addEventListener("mouseenter",function(){
    gsap.to(div,{
        scale:1
    })
})

box.addEventListener("mousemove",function(e){
    gsap.to(div,{
        x:e.x-700,
        y:e.y-400
    })
})

box.addEventListener("mouseleave",function(){
    gsap.to(div,{
        scale:0
    })
})

cont.addEventListener("mouseenter",function(){
    gsap.to(div,{
        scale:1
    })
})

cont.addEventListener("mousemove",function(e){
    gsap.to(div,{
        x:e.x-700,
        y:e.y-400
    })
})

cont.addEventListener("mouseleave",function(){
    gsap.to(div,{
        scale:0
    })
})







const t1 = gsap.timeline()

t1.from("body",{
    scale:10,
    ease:"power2.out",
    ducration:1,
    delay:1
})

t1.from(".cont h2",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.4,
})
t1.from(".cont h1",{
    y:100,
    opacity:0,
    duration:0.5,
    // delay:0.2
})
t1.from(".cont h3",{
    y:100,
    opacity:0,
    duration:0.5,
    // delay:0.2
})

t1.from("nav h1",{
    y:-300,
    opacity:0,
    ducration:0.5,
    ease:"power3.out"
})

t1.from("nav ul li",{
    y:-300,
    opacity:0,
    // delay:0.5,
    duration:0.4,
    stagger:0.4,
    ease:"power1.inOut"
})
t1.from("button",{
    opacity:0,
    duration:0.3,
    // delay:0.1
})
t1.from(".c3",{
    opacity:-10,
    ease:"power1.in",
    ducration:0.6
})
t1.from(".sm a",{
    opacity:0,
    duration:0.3,
})

const bar = document.querySelector(".bar")
const x = document.querySelector(".x")

let a = bar.addEventListener("click",function(){
        gsap.to(".nb",{
            scale:1,
            duration:0.5,
        })
        bar.style.display = "none";
})

x.addEventListener("click",function(){
    gsap.to(".nb",{
        scale:0,
        duration:0.5,
    })
    bar.style.display = "block";
})




