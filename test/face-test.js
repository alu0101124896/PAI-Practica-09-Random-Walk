/**
 * @file face-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the face class
 */

"use strict";

let expectOnFaceTest;
let FaceOnFaceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnFaceTest = require('chai').expect;
  FaceOnFaceTest = require('../src/face.js').Face;
} else { // Execution in browser
  expectOnFaceTest = expect;
  FaceOnFaceTest = Face;
}

describe('Face Class', () => {
  describe('Default properties', () => {
    const MY_FACE = new FaceOnFaceTest();

    it('Face has a xCoord', () => {
      expectOnFaceTest(MY_FACE).to.have.property('xCoord');
      expectOnFaceTest(MY_FACE.xCoord).to.be.equal(20);
    });

    it('Face has a yCoord', () => {
      expectOnFaceTest(MY_FACE).to.have.property('yCoord');
      expectOnFaceTest(MY_FACE.yCoord).to.be.equal(20);
    });

    it('Face has a size', () => {
      expectOnFaceTest(MY_FACE).to.have.property('size');
      expectOnFaceTest(MY_FACE.size).to.be.equal(50);
    });

    it('Face has a rightEye', () => {
      expectOnFaceTest(MY_FACE).to.have.property('rightEye');
    });

    it('Face has a leftEye', () => {
      expectOnFaceTest(MY_FACE).to.have.property('leftEye');
    });

    it('Face has a rightEyebrow', () => {
      expectOnFaceTest(MY_FACE).to.have.property('rightEyebrow');
    });

    it('Face has a leftEyebrow', () => {
      expectOnFaceTest(MY_FACE).to.have.property('leftEyebrow');
    });

    it('Face has a mouth', () => {
      expectOnFaceTest(MY_FACE).to.have.property('mouth');
    });
  });

  describe('Non default properties', () => {
    const X_COORD = 5;
    const Y_COORD = 10;
    const SIZE = 15;
    const MY_FACE = new FaceOnFaceTest(X_COORD, Y_COORD, SIZE);

    it('Modifies default xCoord correctly', () => {
      expectOnFaceTest(MY_FACE).to.have.property('xCoord');
      expectOnFaceTest(MY_FACE.xCoord).to.be.equal(X_COORD);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnFaceTest(MY_FACE).to.have.property('yCoord');
      expectOnFaceTest(MY_FACE.yCoord).to.be.equal(Y_COORD);
    });

    it('Modifies default size correctly', () => {
      expectOnFaceTest(MY_FACE).to.have.property('size');
      expectOnFaceTest(MY_FACE.size).to.be.equal(SIZE);
    });
  });
});
