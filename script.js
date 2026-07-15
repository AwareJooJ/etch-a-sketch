const body = document.querySelector("body");
const container = document.getElementById("container");
const btn = document.querySelector("button");
let hue = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

function createBoxes() {
  let numberPerRow = prompt("Select number (max = 100):");
  if (numberPerRow <= 100) {
    container.innerHTML = "";
    for (let i = 0; i < numberPerRow; i++) {
      const row = document.createElement("div");
      row.classList.toggle("row");
      container.appendChild(row);
      for (let j = 0; j < numberPerRow; j++) {
        const collumn = document.createElement("div");
        collumn.classList.toggle("square");
        row.appendChild(collumn);
        collumn.style.width = `${960 / numberPerRow}px`;
        collumn.style.height = `${960 / numberPerRow}px`;
        collumn.addEventListener("mouseover", () => {
          let op = 100;
          let hue = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${op}%)`;
          collumn.style.backgroundColor = hue;
        });
      }
    }
  } else {
    alert("Select a valid number");
  }
}

btn.addEventListener("click", createBoxes);
