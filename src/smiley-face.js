/**
 * @file smiley-face.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program draws a smiley face
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
    if (window.innerWidth < window.innerHeight)
    {
      CANVAS.width = window.innerWidth - 175;
      CANVAS.height = window.innerWidth - 175;
    } else {
      CANVAS.width = window.innerHeight - 175;
      CANVAS.height = window.innerHeight - 175;
    }

    const face = new FaceOnEjercicioP09(CANVAS.width / 2, CANVAS.height / 2,
      (CANVAS.width * 0.6));
    face.draw(CONTEXT);
  }
}

if (typeof require !== 'undefined') { // Execution in node
  console.error("Error: this program can not be executed in Node.");
}
