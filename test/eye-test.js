/**
 * @file eye-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the eye class
 */

"use strict";

let expectOnEyeTest;
let EyeOnEyeTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnEyeTest = require('chai').expect;
  EyeOnEyeTest = require('../src/eye.js').Eye;
} else { // Execution in browser
  expectOnEyeTest = expect;
  EyeOnEyeTest = Eye;
}

describe('Eye Class', () => {
  describe('Properties', () => {
    const X_COORD = 5;
    const Y_COORD = 10;
    const RADIUS = 15;
    const MY_EYE = new EyeOnEyeTest(X_COORD, Y_COORD, RADIUS);

    it('Eye has a xCoord', () => {
      expectOnEyeTest(MY_EYE).to.have.property('xCoord');
      expectOnEyeTest(MY_EYE.xCoord).to.be.equal(X_COORD);
    });

    it('Eye has a yCoord', () => {
      expectOnEyeTest(MY_EYE).to.have.property('yCoord');
      expectOnEyeTest(MY_EYE.yCoord).to.be.equal(Y_COORD);
    });

    it('Eye has a radius', () => {
      expectOnEyeTest(MY_EYE).to.have.property('radius');
      expectOnEyeTest(MY_EYE.radius).to.be.equal(RADIUS);
    });
  });
});
