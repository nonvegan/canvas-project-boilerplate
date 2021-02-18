import { mapValue, restrain, getRandomInt, getMs } from "./helpers.js";
import Vector from "./Vector.js";
import data from "./data.js";

/** @type {CanvasRenderingContext2D} */
const ctx = document.getElementById("canvas").getContext("2d");
const optionsDiv = document.getElementById("optionsDiv");
const rangeLabel = document.createElement("label");
const range = document.createElement("input");
const button = document.createElement("button");
const listLabel = document.createElement("label");
const dropDownList = document.createElement("select");

const width = window.screen.height / 1.8;
const height = window.screen.height / 1.8;
const items = [];
let repsFrame = 1;

function setup() {
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "rgb(255, 255, 255,1)";
  rangeLabel.textContent = "RangeLabel";
  listLabel.textContent = "ListLabel";
  optionsDiv.appendChild(rangeLabel);
  optionsDiv.appendChild(range);
  optionsDiv.appendChild(button);
  optionsDiv.appendChild(listLabel);
  optionsDiv.appendChild(dropDownList);
  range.setAttribute("type", "range");
  range.setAttribute("min", "1");
  range.setAttribute("value", "250");
  range.setAttribute("max", "1000");
  range.addEventListener("input", () => {
    repsFrame = range.value;
  });
  button.addEventListener("click", clear);
  button.innerHTML = "<span>Reset</span> Button";
  for (const item of items) {
    const newItem = document.createElement("option");
    newItem.setAttribute("value", item);
    newItem.textContent = "Nome";
    dropDownList.appendChild(newItem);
  }
}

function update() {}

function draw() {
  ctx.fillRect(width / 2 - 100, height / 2 - 100, 200, 200);
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}

setup();
setInterval(() => {
  for (let i = 0; i < repsFrame; i++) {
    update();
    draw();
  }
}, getMs(60));
