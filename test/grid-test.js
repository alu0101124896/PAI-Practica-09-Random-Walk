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
let DirectionOnGridClass;
let GridOnGridTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnGridTest = require('chai').expect;
  DirectionOnGridClass = require('../src/direction.js').Direction;
  GridOnGridTest = require('../src/grid.js').Grid;
} else { // Execution in browser
  expectOnGridTest = expect;
  DirectionOnGridClass = Direction;
  GridOnGridTest = Grid;
}

describe('Grid Class', () => {
  describe('Default properties', () => {
    const MY_GRID = new GridOnGridTest();

    it('Grid has a stepLenght', () => {
      expectOnGridTest(MY_GRID).to.have.property('stepLenght');
      expectOnGridTest(MY_GRID.stepLenght).to.be.a('number');
    });

    it('Default stepLenght is 20', () => {
      expectOnGridTest(MY_GRID.stepLenght).to.be.equal(20);
    });
  });

  describe('Non default property values', () => {
    const STEP_LENGHT = 50;
    const MY_GRID = new GridOnGridTest(STEP_LENGHT);

    it('Modifies default stepLenght correctly', () => {
      expectOnGridTest(MY_GRID.stepLenght).to.be.equal(STEP_LENGHT);
    });
  });
});
