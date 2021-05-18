/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");
const gridCells = document.querySelectorAll(".cell");
// gridContainer.addEventListener("mouseover", (event) => {
//   gridContainer.style.outline = "solid red 3px";
// });
const body = document.body;

gridCells.forEach((cell) => {
  cell.addEventListener("clicked", () => {
    cell.style.backgroundColor = "red";
  });
});

body.addEventListener("keypdown", (event) => {
  console.log(event);
  body.style.backgroundColor = "red";
});
