const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
    const triggerBottom = window.innerHeight/ 5 * 4;
    console.log(window.innerHeight);
    boxes.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggerBottom){
            element.classList.add("show");

        }else{
            element.classList.remove("show");
        }
    });
}