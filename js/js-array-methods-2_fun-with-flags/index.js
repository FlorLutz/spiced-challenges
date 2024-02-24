import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.find((country) =>
    country.name.toLowerCase().startsWith(searchString.toLowerCase())
  );
  // country name and searchstring have been put to lowercase, so the search will not be case sensitive

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});
