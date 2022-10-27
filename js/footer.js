// Create a variable to hold a new Date object (defaults to now)
let today = new Date();
// Create a variable to hold the year this year
let month = today.getUTCMonth() + 1; //months from 1-12
let hours = today.getHours();
let minutes = today.getMinutes();
let year = today.getFullYear();

const author = "Tom Johansson";

function fillFooter() {
  // Create a variable called el to hold the element whose id attribute has a value of footer
  let el = document.querySelector("#footer");
  // Write the year into that element.
  el.innerHTML =
    author +
    "" +
    "<p>Copyright &copy;" +
    hours +
    ":" +
    minutes +
    " " +
    month +
    "/" +
    year +
    "</p>";
}

fillFooter();
