/**
 * @file eye.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a eye class for the smiley
 *  eye.
 */

"use strict";

const BLACK = 'black';

/**
 * @description Class representing a point
 *
 * @class Eye
 */
class Eye {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0] - X coordinate of the point
   * @param {number} [yCoord=0] - Y coordinate of the point
   * @param {number} [radius=5] - Y coordinate of the point
   * @memberof Eye
   */
  constructor(xCoord, yCoord, radius = 5) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the eye
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Eye
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = BLACK;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0, 0,
      Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Eye = Eye;
}
