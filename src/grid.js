/**
 * @file grid.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a grid class for Random Walk. More info about it here: https://en.wikipedia.org/wiki/Random_walk
 */

"use strict";

/**
 * @description Class representing a grid
 *
 * @class Grid
 */
class Grid {

  /**
   * @description Constructor that creates an instance of a grid.
   *
   * @memberof Grid
   */
  constructor(unitSize = 20) {
    this.unitSize = unitSize;
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Grid = Grid;
}
