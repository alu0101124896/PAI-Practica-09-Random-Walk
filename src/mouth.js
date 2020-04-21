/**
 * @file mouth.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a mouth class for the smiley face.
 */

"use strict";

const BLACK_MOUTH = 'black';

/**
 * @description Class representing an mouth
 *
 * @class Mouth
 */
class Mouth {

  /**
   * @description Constructor that creates an instance of a mouth.
   *
   * @param {number} xCoord - X coordinate of the mouth
   * @param {number} yCoord - Y coordinate of the mouth
   * @param {number} radius - Radius of the mouth
   * @memberof Mouth
   */
  constructor(xCoord, yCoord, radius) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the mouth
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Mouth
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = BLACK_MOUTH;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0,
      Math.PI / 5, Math.PI * 4 / 5);
    CONTEXT.stroke();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Mouth = Mouth;
}
