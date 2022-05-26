"use strict";

// GLOBAL VAR
const SIDE_A_INPUT = document.getElementById("side-a");
const SIDE_B_INPUT = document.getElementById("side-b");
const MSG_BOLD_P = document.getElementById("msg");

/** Takes a side input
 * returns number if valid
 * Is size a valid integer 2-50?
 */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/** Takes two validated sides
 * returns area of triangle
 */

function calcArea(sideA, sideB) {
  console.log("calcArea", "sideA: ", sideA, "sideB: ", sideB);

  return (sideA * sideB) / 2;
}


/** Takes two validated sides
 * returns hypotenuse ROUNDED TO NEAREST INT
 */

function calcHypotenuse(sideA, sideB) {
  return Math.round((Math.sqrt((sideA**2) + (sideB**2))));
}


function makeAndAppendMessage()




/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  let sideA = validateEdge(a);
  let sideB = validateEdge(b);

  let aMsg = sideA ? "" : "Invalid!";
  let bMsg = sideB ? "" : "Invalid!";

  let msg;

  if (sideA
 && sideB) {
    let area = a * b / 2;
    let hypot = Math.floor(Math.sqrt(a * a + b * b));
    let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
    if (area > 50) {
      msg += ` That's a really big triangle!`;
    }
  } else {
    msg = "";
  }

  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = msg;
}
