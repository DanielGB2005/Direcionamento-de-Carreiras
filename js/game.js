const matheus = document.querySelector(".matheus");

const jump = () => {
   matheus.classList.add("jump");
} 

document.addEventListener("keydown", jump);