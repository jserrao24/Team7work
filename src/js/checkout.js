import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs"; // I imported the checkoutProcess module to this file. I added an add listener for the button.

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutProcess.checkout(e.target);
});
