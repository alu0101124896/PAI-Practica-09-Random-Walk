/**
 * @file eyebrow-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the eyebrow class
 */

"use strict";

let expectOnEyebrowTest;
let EyebrowOnEyebrowTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnEyebrowTest = require('chai').expect;
  EyebrowOnEyebrowTest = require('../src/eyebrow.js').Eyebrow;
} else { // Execution in browser
  expectOnEyebrowTest = expect;
  EyebrowOnEyebrowTest = Eyebrow;
}

describe('Eyebrow Class', () => {
  describe('Properties', () => {
    const X_COORD = 5;
    const Y_COORD = 10;
    const LENGTH = 15;
    const MY_EYEBROW = new EyebrowOnEyebrowTest(X_COORD, Y_COORD, LENGTH);

    it('Eyebrow has a xCoord', () => {
      expectOnEyebrowTest(MY_EYEBROW).to.have.property('xCoord');
      expectOnEyebrowTest(MY_EYEBROW.xCoord).to.be.equal(X_COORD);
    });

    it('Eyebrow has a yCoord', () => {
      expectOnEyebrowTest(MY_EYEBROW).to.have.property('yCoord');
      expectOnEyebrowTest(MY_EYEBROW.yCoord).to.be.equal(Y_COORD);
    });

    it('Eyebrow has a length', () => {
      expectOnEyebrowTest(MY_EYEBROW).to.have.property('length');
      expectOnEyebrowTest(MY_EYEBROW.length).to.be.equal(LENGTH);
    });
  });
});
