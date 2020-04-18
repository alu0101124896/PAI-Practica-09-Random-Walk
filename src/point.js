/**
 * @file point.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a point class for Random Walk. More
 *  info about it here: https://en.wikipedia.org/wiki/Random_walk
 */

"use strict";

/**
 * @description Class representing a point
 *
 * @class Point
 */
class Point {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0]
   * @param {number} [yCoord=0]
   * @memberof Point
   */
  constructor(xCoord = 0, yCoord = 0) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Point = Point;
}
