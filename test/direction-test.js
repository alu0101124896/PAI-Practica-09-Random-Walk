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
let ClassDirectionOnDirectionTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnDirectionTest = require('chai').expect;
  ClassDirectionOnDirectionTest = require('../src/direction.js').Direction;
} else { // Execution in browser
  expectOnDirectionTest = expect;
  ClassDirectionOnDirectionTest = Direction;
}

describe('Direction Class', () => {
  describe('Default properties', () => {
    const MY_DIRECTION = new ClassDirectionOnDirectionTest();

    it('Direction has a xDir', () => {
      expectOnDirectionTest(MY_DIRECTION).to.have.property('xDir');
      expectOnDirectionTest(MY_DIRECTION.xDir).to.be.a('number');
    });

    it('Direction has a yDir', () => {
      expectOnDirectionTest(MY_DIRECTION).to.have.property('yDir');
      expectOnDirectionTest(MY_DIRECTION.yDir).to.be.a('number');
    });
  });
});
