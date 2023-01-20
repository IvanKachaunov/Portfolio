let hamburgerMenu = document.getElementsByClassName("mobile-nav")[0];
let mobileNavMenu = document.getElementsByClassName("mobile-nav-menu")[0];

let mode = document.querySelector(".fa-solid");
let aboutMeSection = document.querySelector("#about");
let aboutMeSectionTable = document.querySelectorAll("#about table td li");
let aboutMeSectionTitle = document.querySelector("#title");
let aboutMeSectionText = document.querySelectorAll("#about h2");
let contactInputs = document.querySelectorAll("#contact input");
let contactTextarea = document.querySelector("#contact textarea");
let contactbutton = document.querySelector("#contact button");
let textarea = document.querySelector("textarea");

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

function darkLightMode(){
    mode.addEventListener("click", () => {
        if(mode.classList.contains("fa-solid")){
            mode.classList.remove("fa-solid")
            mode.classList.add("fa-regular")
            aboutMeSection.style.backgroundColor = "rgb(45, 45, 45)";
            aboutMeSectionTitle.style.color = "rgb(243, 243, 243)";
            for(let i = 0; i <= aboutMeSectionTable.length - 1; i++){
                aboutMeSectionTable[i].style.color = "rgb(243, 243, 243)"
            }
            aboutMeSectionText[0].style.color = "rgb(243, 243, 243)";
            aboutMeSectionText[1].style.color = "rgb(243, 243, 243)";
            contactInputs[0].style.backgroundColor = "rgb(45, 45, 45)";
            contactInputs[1].style.backgroundColor = "rgb(45, 45, 45)";
            contactInputs[0].style.color = "rgb(243, 243, 243)";
            contactInputs[1].style.color = "rgb(243, 243, 243)";
            contactInputs[0].classList.add("placeholdered");
            contactInputs[1].classList.add("placeholdered");
            contactTextarea.style.backgroundColor = "rgb(45, 45, 45)";
            contactTextarea.style.color = "rgb(243, 243, 243)";
            textarea.classList.add("placeholdered");
            contactbutton.style.backgroundColor = "rgb(45, 45, 45)";
        } else{
            aboutMeSection.style.backgroundColor = "rgb(243, 243, 243)";
            aboutMeSectionTitle.style.color = "rgb(45, 45, 45)";
            for(let i = 0; i <= aboutMeSectionTable.length - 1; i++){
                aboutMeSectionTable[i].style.color = "rgb(45, 45, 45)"
            }
            aboutMeSectionText[0].style.color = "rgb(45, 45, 45)";
            aboutMeSectionText[1].style.color = "rgb(45, 45, 45)";
            contactInputs[0].style.backgroundColor = "rgb(243, 243, 243)";
            contactInputs[1].style.backgroundColor = "rgb(243, 243, 243)";
            contactInputs[0].style.color = "rgb(45, 45, 45)";
            contactInputs[1].style.color = "rgb(45, 45, 45)";
            contactInputs[0].classList.remove("placeholdered");
            contactInputs[1].classList.remove("placeholdered");
            contactTextarea.style.backgroundColor = "rgb(243, 243, 243)";
            contactTextarea.style.color = "rgb(45, 45, 45)";
            textarea.classList.remove("placeholdered");
            contactbutton.style.backgroundColor = "#3480ab";
            mode.classList.remove("fa-regular")
            mode.classList.add("fa-solid")
        }
    })
}

function executeFunctions(){
    logo();
    hamburgerNav();
    darkLightMode();
}

executeFunctions();