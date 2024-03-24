console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i < 6; i++) {
    const star = document.createElement("img");
    if (filledStars >= i) {
      star.setAttribute("src", "assets/star-filled.svg");
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
    }
    star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars(4);
