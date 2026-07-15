const body = document.querySelector("body");
const container = document.getElementById("container");
const btn = document.querySelector("button");

function createBoxes() { //main function
  let numberPerRow = prompt("Select number (max = 100):");
  if (numberPerRow <= 100) {
    container.innerHTML = ""; //Clears current grid if any
    for (let i = 0; i < numberPerRow; i++) {
      const row = document.createElement("div");
      row.classList.toggle("row");
      container.appendChild(row);
      for (let j = 0; j < numberPerRow; j++) {
        const collumn = document.createElement("div");
        collumn.classList.toggle("square"); //.square has the borders pre stablished
        row.appendChild(collumn);
        collumn.style.width = `${960 / numberPerRow}px`;//divides container size with the number of squares
        collumn.style.height = `${960 / numberPerRow}px`;//divides container size with the number of squares
        collumn.addEventListener("mouseover", () => { //adds hover effect with random colors
          let op = 100; //opacity value, still figuring out how to increment it per interaction
          let hue = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${op}%)`;
          collumn.style.backgroundColor = hue;
        });
      }
    }
  } else {
    alert("Select a valid number"); //if number higher than 100 is selected
  }
}

btn.addEventListener("click", createBoxes); 
