/**
 * @file direction-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the direction class
 */

"use strict";

let expectOnDirectionTest;
let DirectionOnDirectionTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnDirectionTest = require('chai').expect;
  DirectionOnDirectionTest = require('../src/direction.js').Direction;
} else { // Execution in browser
  expectOnDirectionTest = expect;
  DirectionOnDirectionTest = Direction;
}

describe('Direction Class', () => {
  describe('Default properties', () => {
    const MY_DIRECTION = new DirectionOnDirectionTest();

    it('Direction has a xDir', () => {
      expectOnDirectionTest(MY_DIRECTION).to.have.property('xDir');
      expectOnDirectionTest(MY_DIRECTION.xDir).to.be.a('number');
    });

    it('Direction has a yDir', () => {
      expectOnDirectionTest(MY_DIRECTION).to.have.property('yDir');
      expectOnDirectionTest(MY_DIRECTION.yDir).to.be.a('number');
    });

    it('Default xDir is 1', () => {
      expectOnDirectionTest(MY_DIRECTION.xDir).to.be.equal(1);
    });

    it('Default yDir is 0', () => {
      expectOnDirectionTest(MY_DIRECTION.yDir).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const WEST = new DirectionOnDirectionTest(0, -1);

    it('Modifies default xDir correctly', () => {
      expectOnDirectionTest(WEST.xDir).to.be.equal(0);
    });

    it('Modifies default yDir correctly', () => {
      expectOnDirectionTest(WEST.yDir).to.be.equal(-1);
    });
  });
});
