const header = document.getElementById("header");

const click = ()=>{console.log("Click");}
const dblclick = ()=>{console.log("Double Click");}
const contextmenu = ()=>{console.log("Right Click");}
const mousedown = ()=>{console.log("Mouse Down");}
const mouseup = ()=>{console.log("Mouse Up");}
const wheel = ()=>{console.log("Wheel");}

// Event Listeners
header.addEventListener("click", click);
header.addEventListener("dblclick", dblclick);
header.addEventListener("contextmenu", contextmenu);
header.addEventListener("mousedown", mousedown);
header.addEventListener("mouseup", mouseup);
header.addEventListener("wheel", wheel);
