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
let EyebrowOnFaceClass;
let MouthOnFaceClass;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  EyeOnFaceClass = require('./eye.js').Eye;
  EyebrowOnFaceClass = require('./eyebrow.js').Eyebrow;
  MouthOnFaceClass = require('./mouth.js').Mouth;
}
/* istanbul ignore next */
else { // Execution in browser
  EyeOnFaceClass = Eye;
  EyebrowOnFaceClass = Eyebrow;
  MouthOnFaceClass = Mouth;
}

const BLACK_FACE = 'black';

/**
 * @description Class representing a point
 *
 * @class Face
 */
class Face {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=20] - X coordinate of the point
   * @param {number} [yCoord=20] - Y coordinate of the point
   * @param {number} [size=50] - Y coordinate of the point
   * @memberof Face
   */
  constructor(xCoord = 20, yCoord = 20, size = 50) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.size = size;

    this.rightEye = new EyeOnFaceClass(this.xCoord - this.size / 5,
      this.yCoord - this.size / 8, this.size / 25);
    this.leftEye = new EyeOnFaceClass(this.xCoord + this.size / 5,
      this.yCoord - this.size / 8, this.size / 25);

    this.rightEyebrow = new EyebrowOnFaceClass(this.xCoord - this.size / 5,
      this.yCoord - this.size / 5, this.size / 20);
    this.leftEyebrow = new EyebrowOnFaceClass(this.xCoord + this.size / 5,
      this.yCoord - this.size / 5, this.size / 20);

    this.mouth = new MouthOnFaceClass(this.xCoord, this.yCoord, this.size / 4);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the face
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Face
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.lineWidth = this.size / 20
    CONTEXT.strokeStyle = BLACK_FACE;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.size / 2, this.size / 2, 0,
      0, Math.PI * 2);
    CONTEXT.stroke();

    this.rightEye.draw(CONTEXT);
    this.leftEye.draw(CONTEXT);

    this.rightEyebrow.draw(CONTEXT);
    this.leftEyebrow.draw(CONTEXT);

    this.mouth.draw(CONTEXT);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Face = Face;
}
