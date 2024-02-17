let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);
let circleCircumference = 2 * Math.PI * radius;

console.log(
  "For a circle with a radius of",
  radius,
  "units:\n\t- The area- The area is approximately",
  parseFloat(circleArea).toFixed(2),
  "square units.\n\t- The circumference is approximately",
  parseFloat(circleCircumference).toFixed(2),
  "units."
);
//parseFloat(num).toFixed(2) is used to show 2 decimals of the numbers
