/**
 * @file grid-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the grid class
 */

"use strict";

let expectOnGridTest;
let ClassGridOnGridTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnGridTest = require('chai').expect;
  ClassGridOnGridTest = require('../src/grid.js').Grid;
} else { // Execution in browser
  expectOnGridTest = expect;
  ClassGridOnGridTest = Grid;
}

describe('ClassGridOnGridTest Class', () => {
  describe('Default properties', () => {
    const MY_GRID = new ClassGridOnGridTest();

    it('ClassGridOnGridTest has a stepLenght', () => {
      expectOnGridTest(MY_GRID).to.have.property('stepLenght');
      expectOnGridTest(MY_GRID.stepLenght).to.be.a('number');
    });

    it('Default stepLenght is 20', () => {
      expectOnGridTest(MY_GRID.stepLenght).to.be.equal(20);
    });
  });
});