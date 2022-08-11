let hamburgerMenu = document.getElementsByClassName("mobile-nav")[0];
let mobileNavMenu = document.getElementsByClassName("mobile-nav-menu")[0];


function logo(){

document.querySelector(".logo").addEventListener('click', () => {
    setTimeout(() => {
        console.log("Window is fully loaded!");
        window.location.reload(true);
    }, 300);
});

}

function hamburgerNav(){

    hamburgerMenu.addEventListener("click", function(){       
        if(mobileNavMenu.style.display === "none"){
            mobileNavMenu.style.display = "flex"
        } else{
            mobileNavMenu.style.display = "none"
        }
        document.getElementsByClassName("mobile-nav")[0].classList.toggle("open");
    })
}

function executeFunctions(){
    logo();
    hamburgerNav();
}

executeFunctions();

// $(document).ready(function(){

//     $(".mobile-nav").click(function(){
//             $(".mobile-nav-menu").toggle(300);
//     })

// })
