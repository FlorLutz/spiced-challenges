console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const form = Object.fromEntries(formData);
  console.log("Form:", form);
  event.target.reset();
  event.target.elements.firstName.focus();
  const sumAgeBadness = Number(form.age) + Number(form.badness);
  console.log(`The age-badness-sum of ${form.firstName} is ${sumAgeBadness}`);
});
