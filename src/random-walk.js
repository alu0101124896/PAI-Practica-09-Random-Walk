/**
 * @file random-walk.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program gives seven cards to seven poker hands and seachs
 *  for straights on them. More info about it here:
 *  https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

let PointOnRandomWalk;
let DirectionOnRandomWalk;
let GridOnRandomWalk;
if (typeof require !== 'undefined') { // Execution in node
  PointOnRandomWalk = require('../src/direction.js').Point;
  DirectionOnRandomWalk = require('../src/direction.js').Direction;
  GridOnRandomWalk = require('../src/grid.js').Grid;
} else { // Execution in browser
  PointOnRandomWalk = Point;
  DirectionOnRandomWalk = Direction;
  GridOnRandomWalk = Grid;
}

const RED_SEGMENT = 'red';
const ROUND_SEGMENT = 'round'

function drawSegment(startPoint, endPoint, grid, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = RED_SEGMENT;
  CONTEXT.lineWidth = grid.stepLenght / 4;
  CONTEXT.lineCap = ROUND_SEGMENT;
  CONTEXT.moveTo(startPoint.xCoord, startPoint.yCoord);
  CONTEXT.lineTo(endPoint.xCoord, endPoint.yCoord);
  CONTEXT.stroke();
}

/**
 * @description Function that generates the random walk
 *
 * @param {Grid} grid - Grid in which the random path is going to be generated
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function startRandomWalk(grid, CONTEXT, CANVAS) {
  let startPoint = new PointOnRandomWalk();
  let endPoint = new PointOnRandomWalk();
  startPoint.draw(grid, CONTEXT);
  while ((Math.abs(endPoint.xCoord) < CANVAS.width) ||
    (Math.abs(endPoint.yCoord) < CANVAS.height)) {

  }
}

/**
 * @description Function that starts the execution of the program in browser
 */
function mainBrowser() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerWidth - 100;
    CANVAS.height = window.innerHeight - 175;

    let grid = new GridOnRandomWalk(100);
    grid.draw(CONTEXT, CANVAS);
    startRandomWalk(grid, CONTEXT, CANVAS);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node");
}
