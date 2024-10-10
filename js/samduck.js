document.addEventListener("DOMContentLoaded", ()=>{

    const btn = document.getElementById("btn");
    const menu = document.getElementById("menu");
    const menu_a = document.querySelectorAll("#menu a");
    

    btn.addEventListener("click", () => {

        menu.style.transition = "all 0.5s";

        
        if (btn.textContent == "menu") {            
            btn.textContent = "close";
            menu.style.left = "0%";

        } else {

            btn.textContent = "menu";
            menu.style.left = "-105%";

        }

        menu_a.forEach( i => {
            i.addEventListener("click", ()=>{

                btn.textContent = "menu";
                menu.style.left = "-105%";

            });
        });
    });


})//////////////////끝;