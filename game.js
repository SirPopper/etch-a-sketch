const container = document.getElementById("container");

//create funciton that creates grid in size A x B
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("id", `grid-${i}`);
  }
}

makeRows(0, 0);

//input fields
const inputOne = document.querySelector("#first-input");
const inputTwo = document.querySelector("#second-input");

//take input color
const colorInput = document.querySelector("#color-input");

//pressedSubmit function in addEventListener
function pressedSubmit() {
  deleteGrid();
  makeRows(inputOne.value, inputTwo.value);
  drawing();
  console.log(colorInput.value);
}

const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", pressedSubmit);

//drawing with hover
function drawing() {
  //checks if mouse hovered over div is the div in addEventListener
  const isHover = (e) => e.parentElement.querySelector(":hover") === e;

  //selects all cells into nodelist
  const cells = document.querySelectorAll(".grid-item"); //selects all cells

  //addEventListener to all cells
  cells.forEach((cell) => {
    cell.addEventListener("mousemove", function checkHover() {
      const hovered = isHover(cell);
      if (hovered !== checkHover.hovered) {
        //don't really understand this part why is the variable .hovered called on the function checkHover
        //console.log(hovered ? "hovered" : "not hovered");
        checkHover.hovered = hovered;
        cell.style.background = `${colorInput.value}`;
        //console.log(colorInput.value);
      }
    });
  });
}

//delete grid-items to clear grid
function deleteGrid() {
  const grid = document.querySelectorAll(".grid-item");
  grid.forEach((grid) => container.removeChild(grid));
}
