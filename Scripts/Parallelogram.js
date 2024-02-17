// let area;
// let name; // Define a global variable to store the area

// function parallelogramArea() {
//   const base = parseFloat(getInputValueById("pbase"));
//   const height = parseFloat(getInputValueById("phight"));
//   if (!isNaN(base) && !isNaN(height)) {
//     name = getElementNameById("pname");
//     const result = base * height;
//     area = `${name} Area: ${result} cm²`; // Store the area in the global variable
//     setInnerTextById("parallarea", area);
//   } else {
//     area = "Please enter correct number";
//     setInnerTextById("parallarea", area);
//   }
// }

// // document
// //   .getElementById("list-container")
// //   .addEventListener("click", function (event) {
// //     console.log(event.target);
// //     event.target.parentNode.removeChild(event.target);
// //   });

// document.getElementById("btn-add-item").addEventListener("click", function () {
//   const listContainer = document.getElementById("list-container");
//   const li = document.createElement("li");
//   const btn = document.createElement("button");
//   //   parallelogramArea(); // Call the function to calculate the area
//   li.innerText = area; // Use the global variable to set the text of the list item
//   // li.classList.add("item");
//   const areaArray = area.split(" ");
//   const newh = parseFloat(areaArray[2]);
//   btn.innerText = "Covert to m²";
//   li.innerText = area;
//   btn.classList.add("ml-8", "btn", "btn-primary");

//   btn.addEventListener("click", function () {
//     const meterValue = newh / 100; // Convert centimeters to meters
//     li.innerText = `${name} : ${meterValue}m²`;
//     btn.innerText = "Covert to cm²";
//   });
//   li.appendChild(btn);
//   listContainer.appendChild(li);
// });
let area;
let name; // Define a global variable to store the area

function parallelogramArea() {
  const base = parseFloat(getInputValueById("pbase"));
  const height = parseFloat(getInputValueById("phight"));
  if (!isNaN(base) && !isNaN(height)) {
    name = getElementNameById("pname");
    const result = base * height;
    area = `${name} Area: ${result} cm²`;
    setInnerTextById("parallarea", area);
  } else {
    area = "Please enter correct number";
    setInnerTextById("parallarea", area);
  }
}

document.getElementById("btn-add-item").addEventListener("click", function () {
  const listContainer = document.getElementById("list-container");
  const li = document.createElement("li");
  const btn = document.createElement("button");

  const areaArray = area.split(" ");
  const newh = parseFloat(areaArray[2]);

  // Create a span element to hold the area value
  const areaSpan = document.createElement("span");
  areaSpan.innerText = `${name} : ${newh}cm²`;
  li.appendChild(areaSpan);

  btn.innerText = "Convert to m²";
  btn.classList.add("ml-8", "btn", "btn-primary");

  btn.addEventListener("click", function () {
    const meterValue = newh / 100; // Convert centimeters to meters
    areaSpan.innerText = `${name} : ${meterValue}m²`; // Change the area text
    btn.innerText = "Convert to cm²"; // Change the button text back to original

    // Remove the previous event listener
    btn.removeEventListener("click", cmToM);
    // Add the new event listener
    btn.addEventListener("click", mToCm);
  });

  function mToCm() {
    areaSpan.innerText = `${name} : ${newh}cm²`;
    btn.innerText = "Convert to m²";
    // Remove the event listener for this function
    btn.removeEventListener("click", mToCm);
    // Add the event listener for the cm² to m² conversion
    btn.addEventListener("click", cmToM);
  }

  function cmToM() {
    const meterValue = newh / 100; // Convert centimeters to meters
    areaSpan.innerText = `${name} : ${meterValue}m²`;
    btn.innerText = "Convert to cm²";
    // Remove the event listener for this function
    btn.removeEventListener("click", cmToM);
    // Add the event listener for the m² to cm² conversion
    btn.addEventListener("click", mToCm);
  }

  // Add the event listener for the cm² to m² conversion
  btn.addEventListener("click", cmToM);
  li.appendChild(btn);
  listContainer.appendChild(li);
});
