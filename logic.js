const posts=document.getElementById("newposts");
const button=document.getElementById("click");
const x= document.getElementById("menu");
x.style.display="none";

 

function showposts(){
    posts.style.display="flex";
    button.style.display="none";
}

button.addEventListener("click",function(){
    posts.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

function toggle(){
    var blur=document.getElementById("blur")
    blur.classList.toggle('active')
    var popup=document.getElementById("popup")
    popup.classList.toggle('active')
    console.log('pressed!')
}

var flag = false;

function toggle2(){
    flag=!flag;
    console.log(flag);
    if(flag){
        x.style.display = "flex";
    }else{
        x.style.display="none";
    } 
}
