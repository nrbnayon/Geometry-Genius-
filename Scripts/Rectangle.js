function rectangleArea() {
  const width = getInputValueById("rwidth");
  const length = getInputValueById("rlength");
  const name = getElementNameById("recname");
  const result = width * length;
  const area = `${name} Area: ${result} cm\u00B2`;
  setInnerTextById("recarea", area);
}
