const deg = 6;
const h = document.querySelector("#h");
const m = document.querySelector("#m");
const s = document.querySelector("#s");

const myTime = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    h.style.transform = `rotate(${(hh) + (mm/12)}deg)`;
    m.style.transform = `rotate(${(mm)}deg)`;
    s.style.transform = `rotate(${(ss)}deg)`;

}

setInterval(myTime);