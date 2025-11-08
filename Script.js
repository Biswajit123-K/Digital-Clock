const t = document.querySelector("h2")
setInterval(()=>{
let time = new Date();
t.textContent = time.toLocaleTimeString();
},1000);