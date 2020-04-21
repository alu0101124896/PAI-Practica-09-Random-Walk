/**
 * @file circunference-p09.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a circunference class for the smiley
 *  face.
 */

"use strict";

const BLACK_CIRCUNFERENCE = 'black';

/**
 * @description Class representing a point
 *
 * @class Circunference
 */
class Circunference {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0] - X coordinate of the point
   * @param {number} [yCoord=0] - Y coordinate of the point
   * @memberof Circunference
   */
  constructor(xCoord = 0, yCoord = 0, radius = 5) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the point
   *
   * @param {Grid} grid - Grid where the point is located
   * @param {*} CONTEXT - Canvas context
   * @memberof Circunference
   */
  draw(grid, CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = BLACK_CIRCUNFERENCE;
    CONTEXT.ellipse(this.xCoord, this.yCoord, grid.stepLenght / 4,
      grid.stepLenght / 4, 0, 0, Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Circunference = Circunference;
}
