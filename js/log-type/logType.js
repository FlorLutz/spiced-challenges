let data = "put value here";
console.log("data:", data);
console.log("typeof data:", typeof data);

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    if (Array.isArray(data)) {
      console.log("array!");
    } else if (data === null) {
      console.log("null!");
    } else {
      console.log("object!");
    }
    break;
  case "number":
    console.log(isNaN(data) ? "not a number!" : "number!");
    // alternatively use if-else:
    // if (isNaN(data)) {
    //   console.log("not a number!");
    // } else {
    //   console.log("number!");
    // }
    break;
  default:
    console.log("I have no idea!");
    break;
}
