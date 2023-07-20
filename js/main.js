
let nav_container = document.getElementsByClassName("nav-container")[0];
const list = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-item");

window.onscroll = function () {

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav_container.style.backgroundColor = "#0071bc";
        nav_container.style.top = "0";
        $("#logo-img").attr("src", "images/Logo White.png");
        // // $(".nav-item").each(function(){
        //     $(".nav-item").hover(function(){
        //         $(".nav-item").css("color", "green");
        //     });
        // // });
    }
    else {
        nav_container.style.backgroundColor = "transparent";
        nav_container.style.top = "30px";
        $("#logo-img").attr("src", "images/Seal.png");
        // $(".nav-item").each(function(){
        //     $(".nav-item").hover(function(){
        //         $(".nav-item").css("color", "#0071bc");
        //     });
        // });
    }
}
