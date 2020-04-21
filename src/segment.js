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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PointOnSegmentClass = require('./point.js').Point;
}
/* istanbul ignore next */
else { // Execution in browser
  PointOnSegmentClass = Point;
}

const DARKGREEN_SEGMENT = 'darkgreen';
const ROUND_SEGMENT = 'round';

/**
 * @description Class representing a segment
 *
 * @class Segment
 */
class Segment {

  /**
   * @description Creates an instance of a segment.
   *
   * @param {Point} startPoint - Starting point of the segment
   * @param {Point} endPoint - Ending point of the segment
   * @memberof Segment
   */
  constructor(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the segment
   *
   * @param {number} numOfSegments - segment number to decorate properly
   * @param {Grid} grid - Grid where the segment is located
   * @param {*} CONTEXT - Canvas context
   * @memberof Segment
   */
  draw(numOfSegments, grid, CONTEXT) {
    CONTEXT.beginPath();
    if (numOfSegments > 5) {
      switch (numOfSegments % 4) {
        case 0:
          CONTEXT.setLineDash([]);
          break;
        case 1:
          CONTEXT.setLineDash([5, 5]);
          break;
        case 2:
          CONTEXT.setLineDash([10, 5]);
          break;
        case 3:
          CONTEXT.setLineDash([5, 3, 3, 3]);
          break;

        default:
          console.log('Error: Unknoun number on setLineDash');
          break;
      }
    }
    CONTEXT.strokeStyle = 'rgb(' + ((255 - (numOfSegments % 255)) / 2) + ',' +
      (255 - (numOfSegments % 255)) + ',0)';

    CONTEXT.lineWidth = grid.stepLenght / 4;
    // CONTEXT.lineCap = ROUND_SEGMENT;
    CONTEXT.moveTo(this.startPoint.xCoord, this.startPoint.yCoord);
    CONTEXT.lineTo(this.endPoint.xCoord, this.endPoint.yCoord);
    CONTEXT.stroke();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Segment = Segment;
}
