const headerDiv = document.querySelector(".header-cont");
console.log(headerDiv)


function ranRGB() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G},${B})`
}


setInterval(function () {
    headerDiv.style.backgroundColor = ranRGB();
}, 1000);

