const menu = document.querySelector(".menu")
const eight = document.querySelector(".drop-down-box1")

var flag = 0
menu.addEventListener("mousemove",function(){
    if(flag === 0){
    eight.style.transform = "translateY(-0%)"
    flag = 1
}else{
    eight.style.transform = "translateY(-130%)"
    flag = 0
}

})



const chenu = document.querySelector(".chenu")
const eights = document.querySelector(".drop-down-box2")

var flag = 0
chenu.addEventListener("mousemove",function(){
    if(flag === 0){
    eights.style.transform = "translateY(-0%)"
    flag = 1
}else{
    eights.style.transform = "translateY(-130%)"
    flag = 0
}

})