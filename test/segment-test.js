/**
 * @file segment-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the segment class
 */

"use strict";

let expectOnSegmentTest;
let PointOnSegmentTest;
let SegmentOnSegmentTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnSegmentTest = require('chai').expect;
  PointOnSegmentTest = require('../src/point.js').Point;
  SegmentOnSegmentTest = require('../src/segment.js').Segment;
} else { // Execution in browser
  expectOnSegmentTest = expect;
  PointOnSegmentTest = Point;
  SegmentOnSegmentTest = Segment;
}

describe('Segment Class', () => {
  describe('Properties', () => {
    const START_POINT = new PointOnSegmentTest();
    const END_POINT = new PointOnSegmentTest();
    const MY_SEGMENT = new SegmentOnSegmentTest(START_POINT, END_POINT);

    it('Segment has a startPoint', () => {
      expectOnSegmentTest(MY_SEGMENT).to.have.property('startPoint');
      expectOnSegmentTest(MY_SEGMENT.startPoint).to.be.deep.equal(START_POINT);
    });

    it('Segment has a endPoint', () => {
      expectOnSegmentTest(MY_SEGMENT).to.have.property('endPoint');
      expectOnSegmentTest(MY_SEGMENT.startPoint).to.be.deep.equal(END_POINT);
    });
  });
});
