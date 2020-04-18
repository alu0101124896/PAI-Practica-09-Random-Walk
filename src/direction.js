/**
 * @file direction.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a direction class for Random Walk. More info about it here: https://en.wikipedia.org/wiki/Random_walk
 */

"use strict";

/**
 * @description Class representing a direction
 *
 * @class Direction
 */
class Direction {

  /**
   * @description Constructor that creates an instance of a direction.
   *
   * @memberof Direction
   */
  constructor(xDir = 1, yDir = 0) {
    this.xDir = xDir;
    this.yDir = yDir;
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Direction = Direction;
}
