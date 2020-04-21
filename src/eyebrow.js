/**
 * @file eyebrow.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a eyebrow class for the smiley face.
 */

"use strict";

const BLACK_EYEBROW = 'black';

/**
 * @description Class representing a eyebrow
 *
 * @class Eyebrow
 */
class Eyebrow {

  /**
   * @description Constructor that creates an instance of a eyebrow.
   *
   * @param {number} xCoord - X coordinate of the eyebrow
   * @param {number} yCoord - Y coordinate of the eyebrow
   * @param {number} length - Length of the eyebrow
   * @memberof Eyebrow
   */
  constructor(xCoord, yCoord, length) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.length = length;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the eyebrow
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Eyebrow
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = BLACK_EYEBROW;
    CONTEXT.rect(this.xCoord - this.length * 3 / 2, this.yCoord - this.length,
      this.length * 3, this.length);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Eyebrow = Eyebrow;
}
