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

/**
 * @description Function that generates the random walk
 *
 * @param {*} grid
 * @param {*} CONTEXT
 * @param {*} CANVAS
 */
function startRandomWalk(grid, CONTEXT, CANVAS) {
  drawPoint(0, 0, CONTEXT);
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

    let grid = new GridOnRandomWalk();
    grid.drawGrid(CONTEXT, CANVAS);
    startRandomWalk(grid, CONTEXT, CANVAS);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node");
}
