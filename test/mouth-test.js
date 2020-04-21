/**
 * @file mouth-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the mouth class
 */

"use strict";

let expectOnMouthTest;
let MouthOnMouthTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnMouthTest = require('chai').expect;
  MouthOnMouthTest = require('../src/mouth.js').Mouth;
} else { // Execution in browser
  expectOnMouthTest = expect;
  MouthOnMouthTest = Mouth;
}

describe('Mouth Class', () => {
  describe('Properties', () => {
    const X_COORD = 5;
    const Y_COORD = 10;
    const RADIUS = 15;
    const MY_MOUTH = new MouthOnMouthTest(X_COORD, Y_COORD, RADIUS);

    it('Mouth has a xCoord', () => {
      expectOnMouthTest(MY_MOUTH).to.have.property('xCoord');
      expectOnMouthTest(MY_MOUTH.xCoord).to.be.equal(X_COORD);
    });

    it('Mouth has a yCoord', () => {
      expectOnMouthTest(MY_MOUTH).to.have.property('yCoord');
      expectOnMouthTest(MY_MOUTH.yCoord).to.be.equal(Y_COORD);
    });

    it('Mouth has a radius', () => {
      expectOnMouthTest(MY_MOUTH).to.have.property('radius');
      expectOnMouthTest(MY_MOUTH.radius).to.be.equal(RADIUS);
    });
  });
});
