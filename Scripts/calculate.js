console.log("Connected");

function calculateTriArea() {
  const base = parseFloat(document.getElementById("tribase").value);
  const height = parseFloat(document.getElementById("trihi").value);
  const res = 0.5 * base * height;
  console.log(res);
  const getName = document.getElementById("triname").innerText;
  document.getElementById(
    "result"
  ).innerText = `${getName} Area: ${res} cm\u00B2`;
}
