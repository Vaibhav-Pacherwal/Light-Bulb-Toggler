let btn = document.querySelector("button");
let centerDiv = document.querySelector(".center")
let img = document.querySelector("#bulbImg")
let light = document.querySelectorAll(".light");
let bulb = document.querySelector(".bulb");
btn.addEventListener("click", ()=>{
    if(img.src.includes("light-on.png")) {
        img.src = "light-off.png";
        centerDiv.classList.add("translation");
        for(let i = 0; i < light.length; i++) {
            light[i].classList.add("translation2");
            // light[i].classList.add("ON");
        }
    }
    else if(img.src.includes("light-off.png")) {
        img.src = "light-on.png";
        centerDiv.classList.remove("translation");
        for(let i = 0; i < light.length; i++) {
            light[i].classList.remove("translation2");
            // light[i].classList.add("ON");
        }
    }
});


