
const t = document.querySelector(".time-container");
const h = document.querySelector(".hour");
const m = document.querySelector(".minute");
const s = document.querySelector(".second");
const present = document.querySelector(".current");


setInterval(() => {
    const time = new Date();


    console.log(time.getHours());
    let hours = time.getHours();

    let formate = (hours >= 12) ? "PM" : "AM";
    present.textContent = formate;

    let formatehours = (hours > 12) ? hours - 12 : hours;


    h.innerText = formatehours;

    m.textContent = time.getMinutes();
    s.textContent = time.getSeconds();




}, 1000);
