console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function newElement(elementType, className, content) {
  const newElement = document.createElement(elementType);
  newElement.classList.add(className);
  newElement.textContent = content;
  return newElement;
}

const section = newElement("section", "post", "");
document.body.append(section);

const paragraph = newElement(
  "p",
  "post__content",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
);
section.append(paragraph);

const footer = newElement("footer", "post__footer", "");
section.appendChild(footer);

const span = newElement("span", "post__username", "@username");
footer.append(span);

const button = newElement("button", "post__button", "♥ Like");
footer.append(button);
button.setAttribute("data-js", "like-button2");

const likeButton2 = document.querySelector('[data-js="like-button2"');
likeButton2.addEventListener("click", handleLikeButtonClick);

// _____________________________________
// Here is my first solution without a function for creating elements:
// const section = document.createElement("section");
// section.classList.add("post");
// document.body.append(section);

// const paragraph = document.createElement("p");
// paragraph.classList.add("post__content");
// paragraph.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// section.append(paragraph);

// const footer = document.createElement("footer");
// footer.classList.add("post__footer");
// section.append(footer);

// const spanUsername = document.createElement("span");
// spanUsername.classList.add("post__username");
// spanUsername.textContent = "@username";
// footer.append(spanUsername);

// const button = document.createElement("button");
// button.classList.add("post__button");
// button.textContent = "♥ Like";
// button.setAttribute("data-js", "like-button");
// footer.append(button);
