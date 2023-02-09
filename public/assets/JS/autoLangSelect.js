
import {language} from "./output.mjs"

// Object for addeventlistener on all buttons changing language.
const countries = {
  "#eng": "england",
  "#pl": "poland",
  "#ukr": "ukraine",
};

const ukr = Object.entries(language.ukr);
const pl = Object.entries(language.pl);
var key, value, selector;

if (window.location.hash.substring(1) === "eng") {
} else if (window.location.hash.substring(1) === "ukr") {
  for ([key, value] of ukr) {
    selector = "." + key;
    document.querySelector(selector).textContent = value;
  }
} else if (window.location.hash.substring(1) === "pl") {
  for ([key, value] of pl) {
    selector = "." + key;
    document.querySelector(selector).textContent = value;
  }
}

for (const [key, value] of Object.entries(countries)) {
  const currentCountry = document.getElementsByClassName(value);
  for (var country of currentCountry) {
    country.addEventListener("click", () => {
      window.location.hash = key;
      window.location.reload(true);
    });
  }
}

document.getElementById("england").addEventListener('click', () => {
  window.location.hash = "#eng"
  window.location.reload(true);
});
