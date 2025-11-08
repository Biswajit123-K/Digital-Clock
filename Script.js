
const t = document.querySelector(".time-container");
setInterval(()=>{
let time = new Date();
t.textContent = time.toLocaleTimeString();
})