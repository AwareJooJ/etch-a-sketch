const body = document.querySelector("body");
const container = document.getElementById("container");
const btn = document.createElement("button");

btn.textContent = "Grids"
body.appendChild(btn);

for (let i = 1; i <= 256; i++){
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.id = `square${i}`;
    container.appendChild(square);
}
