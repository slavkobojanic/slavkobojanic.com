document.addEventListener("pointermove", (e) => {
    let mx = e.clientX;
    let my = e.clientY;

    const mainElem = document.querySelector(".main");
    const newElem = document.createElement("img");
    newElem.src = "cur.png";
    newElem.style = `width:25px;height:50px;position:absolute;top:${my + 15}px;left:${mx + 15}px`;
    mainElem.appendChild(newElem);
    setTimeout(() => newElem.remove(), 500);
});