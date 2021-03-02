const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
reactionHappy = wrapper.querySelector(".reactionHappy"),
reactionSad = wrapper.querySelector(".reactionSad"),
closeIcon = wrapper.querySelector(".colse-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
        xhr.onload = ()=>{
            if(xhr.status== 200 && xhr.status < 300){
            toast.classList.remove("offline");
            title.innerText = "You're Now Online";
            subTitle.innerText = "Hurrey! Internet is connected.";
            wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
            reactionHappy.innerHTML = '<i class="uil uil-smile"></i>';
            closeIcon.onclick = ()=>{
                wrapper.classList.add("hide");
            }

            setTimeout(()=>{
                wrapper.classList.add("hide");
            }, 5000)

            }else{
                offline()
            }
            
        }
        xhr.onerror = ()=>{
            offline()
        }
        xhr.send();
    }

    function offline(){
        toast.classList.add("offline");
        title.innerText = "You're Now Offline";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        reactionSad.innerHTML = '<i class="uil uil-sad-crying"></i>';
        closeIcon.onclick = ()=>{
            wrapper.classList.add("hide");
        }
    }

    // This SetInterval will help to show you offline or online this prject without any refresh.
    setInterval(()=>{
        ajax();
    }, 100);
    
}