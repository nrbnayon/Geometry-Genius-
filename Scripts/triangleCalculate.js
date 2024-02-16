//Calculate Triangle
function calculateTriArea() {
  const base = getInputValueById("tribase");
  //   console.log("base value", base);
  const height = getInputValueById("trihi");
  //   console.log("height value", height);
  const name = getElementNameById("triname");
  //   console.log("Get geometry name: ", name);
  const res = 0.5 * base * height;
  const area = `${name} Area: ${res} cm\u00B2`;
  setInnerTextById("result", area);
}
