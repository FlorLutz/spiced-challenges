console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Big news for all of you";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
let numLikes = 53;
const userAuthor = "Paul Müller";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(
  "title: ",
  title,
  "\ntext: ",
  text,
  "\nnumLikes:",
  numLikes,
  "\nuserAuthor",
  userAuthor,
  "\nisReported:",
  isReported
);

numLikes++;

console.log("new number of likes: ", numLikes);

// --^-- write your code here --^--
