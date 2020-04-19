/**
 * @file grid.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a grid class for Random Walk. More info
 *  about it here: https://en.wikipedia.org/wiki/Random_walk
 */

"use strict";

const BLACK_LINE = 'black';
const GRID_LINE_WIDTH = 1;

/**
 * @description Class representing a grid
 *
 * @class Grid
 */
class Grid {

  /**
   * @description Constructor that creates an instance of a grid.
   *
   * @param {number} [stepLenght=20] - Lenght from a line of the grid to another
   * @memberof Grid
   */
  constructor(stepLenght = 20) {
    this.stepLenght = stepLenght;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the grid
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Grid
   */
  draw(CONTEXT, CANVAS) {
    CONTEXT.translate(CANVAS.width / 2, CANVAS.height / 2);
    let widthIterator = 0;
    while (widthIterator < CANVAS.width / 2) {
      CONTEXT.beginPath();
      CONTEXT.strokeStyle = BLACK_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(widthIterator, -CANVAS.height / 2);
      CONTEXT.lineTo(widthIterator, CANVAS.height / 2);
      CONTEXT.stroke()

      CONTEXT.beginPath();
      CONTEXT.strokeStyle = BLACK_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(-widthIterator, -CANVAS.height / 2);
      CONTEXT.lineTo(-widthIterator, CANVAS.height / 2);
      CONTEXT.stroke()

      widthIterator += this.stepLenght;
    }
    let heightIterator = 0;
    while (heightIterator < CANVAS.height / 2) {
      CONTEXT.beginPath();
      CONTEXT.strokeStyle = BLACK_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(-CANVAS.width / 2, heightIterator);
      CONTEXT.lineTo(CANVAS.width / 2, heightIterator);
      CONTEXT.stroke()

      CONTEXT.beginPath();
      CONTEXT.strokeStyle = BLACK_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(-CANVAS.width / 2, -heightIterator);
      CONTEXT.lineTo(CANVAS.width / 2, -heightIterator);
      CONTEXT.stroke()

      heightIterator += this.stepLenght;
    }
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Grid = Grid;
}
