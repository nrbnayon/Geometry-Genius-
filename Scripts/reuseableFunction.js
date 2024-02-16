// console.log("Connected");

// function calculateTriArea() {
//   const base = parseFloat(document.getElementById("tribase").value);
//   const height = parseFloat(document.getElementById("trihi").value);
//   const res = 0.5 * base * height;
//   console.log(res);
//   const getName = document.getElementById("triname").innerText;
//   document.getElementById(
//     "result"
//   ).innerText = `${getName} Area: ${res} cm\u00B2`;
// }

/**
 * Reuseable function
 */

// Get input value
function getInputValueById(inputFieldId) {
  const inputField = parseFloat(document.getElementById(inputFieldId).value);
  return inputField;
}

// Get name
function getElementNameById(elementId) {
  const element = document.getElementById(elementId);
  return element.innerText;
}

// set area result
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
