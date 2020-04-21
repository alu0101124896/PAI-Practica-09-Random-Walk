/**
 * @file face.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a face class for the smiley
 *  face.
 */

"use strict";

let EyeOnFaceClass;
if (typeof require !== 'undefined') { // Execution in node
  EyeOnFaceClass = require('./eye.js').Eye;
} else { // Execution in browser
  EyeOnFaceClass = Eye;
}

/**
 * @description Class representing a point
 *
 * @class Face
 */
class Face {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0] - X coordinate of the point
   * @param {number} [yCoord=0] - Y coordinate of the point
   * @param {number} [radius=5] - Y coordinate of the point
   * @memberof Face
   */
  constructor(xCoord = 0, yCoord = 0, radius = 50) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the face
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Face
   */
  draw(CONTEXT) {
    const rightEye = new EyeOnFaceClass(arguments);
    rightEye.draw(CONTEXT);
    const leftEye = new EyeOnFaceClass(arguments);
    leftEye.draw(CONTEXT);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Face = Face;
}
