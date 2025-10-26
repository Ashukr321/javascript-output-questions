// btn 
// box 
// event 
// click 
// change bgc color 

const btn = document.getElementById("btn");
btn.classList.add("btn")
btn.addEventListener('mouseover', () => {
  const box = document.getElementById("box");
  box.style.backgroundColor = "orange";
  box.style.borderRadius="100%";
  box.style.transition="all .8s ease-in-out"
})
btn.addEventListener('mouseout', () => {
  const box = document.getElementById("box");
  box.style.backgroundColor = "";
  box.style.borderRadius="";
  box.style.transition="all .8s ease-in-out"
})