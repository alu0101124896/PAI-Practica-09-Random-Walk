/**
 * @file eye.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a eye class for the smiley face.
 */

"use strict";

const BLACK_EYE = 'black';

/**
 * @description Class representing an eye
 *
 * @class Eye
 */
class Eye {

  /**
   * @description Constructor that creates an instance of a eye.
   *
   * @param {number} xCoord - X coordinate of the eye
   * @param {number} yCoord - Y coordinate of the eye
   * @param {number} radius - Radius of the eye
   * @memberof Eye
   */
  constructor(xCoord, yCoord, radius) {
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
    CONTEXT.fillStyle = BLACK_EYE;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0, 0,
      Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Eye = Eye;
}
