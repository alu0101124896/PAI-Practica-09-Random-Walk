/**
 * @file segment.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a segment class for Random Walk. More
 *  info about it here: https://en.wikipedia.org/wiki/Random_walk
 */

"use strict";

let PointOnSegmentClass;
if (typeof require !== 'undefined') { // Execution in node
  PointOnSegmentClass = require('../src/point.js').Point;
} else { // Execution in browser
  PointOnSegmentClass = Point;
}

/**
 * @description Class representing a segment
 *
 * @class Segment
 */
class Segment {

  constructor() {
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Segment = Segment;
}
