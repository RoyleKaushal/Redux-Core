import { compose } from "redux";

function removeSpaces(str) {
  return str.split(" ").join("");
}

function repeatString(str) {
  return str + str;
}

function convertToUpper(str) {
  return str.toUpperCase();
}

const str = "abc def ghi";

// const conv_str = convertToUpper(repeatString(removeSpaces(str))); // To achieve this we can use compose method from redux

const composedFunction = compose(removeSpaces, repeatString, convertToUpper);

const conv_str = composedFunction(str);
console.log(conv_str);
