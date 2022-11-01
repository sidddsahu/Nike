const menu = document.querySelector(".menu")
const eight = document.querySelector(".drop-down-box1")


menu.addEventListener("mousemove",function(){ 
    eight.style.transform = "translateY(-0%)"
})


menu.addEventListener("mouseleave",function(){ 
    eight.style.transform = "translateY(-130%)"
})


const chenu = document.querySelector(".chenu")
const eights = document.querySelector(".drop-down-box2")

chenu.addEventListener("mousemove", function (){
    eights.style.transform = "translateY(-0%)"
})



chenu.addEventListener("mouseleave", function (){
    eights.style.transform = "translateY(-130%)"
})





const genu = document.querySelector(".genu")
const ninth = document.querySelector(".drop-down-box3")

genu.addEventListener("mousemove", function (){
    ninth.style.transform = "translateY(-0%)"
})



genu.addEventListener("mouseleave", function (){
    ninth.style.transform = "translateY(-130%)"
})





const kenu = document.querySelector(".kenu")
const tenth = document.querySelector(".drop-down-box4")


setTimeout(function(){
  
kenu.addEventListener("mousemove", function (){
    tenth.style.transform = "translateY(-0%)"
})

    
},4000)

kenu.addEventListener("mouseleave", function (){
    tenth.style.transform = "translateY(-170%)"
})



const senu = document.querySelector(".senu")
const eleventh = document.querySelector(".drop-down-box5")

senu.addEventListener("mousemove", function (){
    eleventh.style.transform = "translateY(-0%)"
})



senu.addEventListener("mouseleave", function (){
    eleventh.style.transform = "translateY(-170%)"
})
