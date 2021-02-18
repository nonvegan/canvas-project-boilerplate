import { getMs } from "./helpers.js";
import { Ant, Vector } from "./classes.js";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const optionsDiv = document.getElementById("optionsDiv");
const repsLabel = document.createElement("label");
const repsRange = document.createElement("input");
const button = document.createElement("button");

const cellSize = 5;

const width =
  Math.round(window.screen.height / 1.8) -
  (Math.round(window.screen.height / 1.8) % cellSize);
const height =
  Math.round(window.screen.height / 1.8) -
  (Math.round(window.screen.height / 1.8) % cellSize);
let gridCells = Array.from(Array(height / cellSize), () =>
  new Array(width / cellSize).fill(0)
);
let ant = new Ant(
  new Vector(
    width / 2 - ((width / 2) % cellSize),
    height / 2 - ((height / 2) % cellSize)
  ),
  new Vector(cellSize, cellSize),
  new Vector(cellSize, 0)
);

let intervalId;
let stepsFrame = 10;

function setup() {
  canvas.width = width;
  canvas.height = height;
  repsLabel.textContent = "Steps/f";
  optionsDiv.appendChild(repsLabel);
  optionsDiv.appendChild(repsRange);
  optionsDiv.appendChild(button);
  repsRange.setAttribute("type", "range");
  repsRange.setAttribute("min", "1");
  repsRange.setAttribute("value", "10");
  repsRange.setAttribute("max", "250");
  repsRange.addEventListener("input", () => {
    stepsFrame = repsRange.value;
  });
  button.addEventListener("click", reset);
  button.innerHTML = "<span>Reset</span> Button";
}

function update() {
  const antGridCords = ant.getGridCords(width, height);
  if (!gridCells[antGridCords.y][antGridCords.x]) {
    ctx.fillStyle = "#f92672";
    ant.vel.rotate(-Math.PI / 2);
    gridCells[antGridCords.y][antGridCords.x] = 1;
  } else {
    ctx.fillStyle = "#282c34";
    ant.vel.rotate(Math.PI / 2);
    gridCells[antGridCords.y][antGridCords.x] = 0;
  }
  ant.pos.add(ant.vel);
  if (ant.pos.x >= width) {
    ant.pos.x = 0;
  } else if (ant.pos.x < 0) {
    ant.pos.x = width - ant.size.x;
  }
  if (ant.pos.y >= height) {
    ant.pos.y = 0;
  } else if (ant.pos.y < 0) {
    ant.pos.y = height - ant.size.y;
  }
}

function draw() {
  ctx.fillRect(width - ant.pos.x, ant.pos.y, ant.size.y, ant.size.x);
}

function reset() {
  ctx.clearRect(0, 0, width, height);
  clearInterval(intervalId);
  ant = new Ant(
    new Vector(
      width / 2 - ((width / 2) % cellSize),
      height / 2 - ((height / 2) % cellSize)
    ),
    new Vector(cellSize, cellSize),
    new Vector(cellSize, 0)
  );
  gridCells = Array.from(Array(height / cellSize), () =>
    new Array(width / cellSize).fill(0)
  );
  start();
}
function start() {
  let n = 0;
  intervalId = setInterval(() => {
    for (let i = 0; i < stepsFrame; i++) {
      n++;
      update();
      draw();
    }
  }, getMs(30));
}

setup();
start();
