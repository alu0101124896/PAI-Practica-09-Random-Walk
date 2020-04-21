/**
 * @file random-walk.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program gives seven cards to seven poker hands and seachs
 *  for straights on them. More info about it here:
 *  https://en.wikipedia.org/wiki/Texas_hold_%27em
 */

"use strict";

let FaceOnEjercicioP09;
if (typeof require !== 'undefined') { // Execution in node
  FaceOnEjercicioP09 = require('./face.js').Face;
} else { // Execution in browser
  FaceOnEjercicioP09 = Face;
}

/**
 * @description Function that starts the execution of the program in browser
 */
function mainBrowser() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerHeight - 175;
    CANVAS.height = window.innerHeight - 175;

    const face = new FaceOnEjercicioP09(arguments);
    face.draw(CONTEXT);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node.");
}
