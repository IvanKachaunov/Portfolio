let hamburgerMenu = document.getElementsByClassName("mobile-nav")[0];
let mobileNavMenu = document.getElementsByClassName("mobile-nav-menu")[0];


function hamburgerNav(){

    hamburgerMenu.addEventListener("click", function(){       
        if(mobileNavMenu.style.display === "none"){
            mobileNavMenu.style.display = "flex"
        } else{
            mobileNavMenu.style.display = "none"
        }
    })
}

function executeFunctions(){
    hamburgerNav();
}

executeFunctions();