const container = document.getElementById("container");

//create funciton that creates grid in size A x B
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = i + 1;
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("id", `grid-${i}`);
  }
}

makeRows(16, 16);

const isHover = (e) => e.parentElement.querySelector(":hover") === e;

const cells = document.querySelectorAll(".grid-item");
cells.forEach((cell) => {
  cell.style.color = "red";
  cell.addEventListener("mousemove", function checkHover() {
    const hovered = isHover(cell);
    if (hovered !== checkHover.hovered) {
      console.log(hovered ? "hovered" : "not hovered");
      checkHover.hovered = hovered;
      cell.style.background = "black";
    }
  });
});
