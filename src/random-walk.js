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
let SegmentOnRandomWalk;
let GridOnRandomWalk;
if (typeof require !== 'undefined') { // Execution in node
  PointOnRandomWalk = require('./point.js').Point;
  SegmentOnRandomWalk = require('./segment.js').Segment;
  GridOnRandomWalk = require('./grid.js').Grid;
} else { // Execution in browser
  PointOnRandomWalk = Point;
  SegmentOnRandomWalk = Segment;
  GridOnRandomWalk = Grid;
}

/**
 * @description Function that generates random numbers between the given values
 *
 * @param {number} min_val - Minimum random value
 * @param {number} max_val - Maximum random value
 * @returns {number} Returns the random number generated
 */
function random(min_val, max_val) {
  return (Math.floor(Math.random() * (max_val - min_val)) + min_val);
}

/**
 * @description Function that stops the execution the given amount of time
 *
 * @param {number} msToWait - Number of miniseconds to stop the execution
 */
function sleep(msToWait) {
  return new Promise(resolve => setTimeout(resolve, msToWait));
}

/**
 * @description Function that generates the random walk
 *
 * @param {Grid} grid - Grid in which the random path is going to be generated
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
async function startRandomWalk(grid, CONTEXT, CANVAS) {
  let startPoint = new PointOnRandomWalk();
  let endPoint = new PointOnRandomWalk();
  startPoint.draw(grid, CONTEXT);
  while ((Math.abs(endPoint.xCoord) < (CANVAS.width / 2)) &&
    (Math.abs(endPoint.yCoord) < (CANVAS.height / 2))) {
    startPoint = Object.assign(Object.create(
      Object.getPrototypeOf(endPoint)), endPoint);
    let direction = random(0, 4);
    switch (direction) {
      case 0:
        endPoint.yCoord -= grid.stepLenght; // Up
        break;
      case 1:
        endPoint.yCoord += grid.stepLenght; // Down
        break;
      case 2:
        endPoint.xCoord += grid.stepLenght; // Right
        break;
      case 3:
        endPoint.xCoord -= grid.stepLenght; // Left
        break;

      default:
        console.error('Error: Unexpected direction');
        break;
    }
    await sleep(grid.stepLenght);
    let segment = new SegmentOnRandomWalk(startPoint, endPoint);
    segment.draw(grid, CONTEXT);
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

    let grid = new GridOnRandomWalk(20);
    grid.draw(CONTEXT, CANVAS);
    startRandomWalk(grid, CONTEXT, CANVAS);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node");
}
