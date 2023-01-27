// Varables
const HAMBURGER = document.getElementById("hambburger");
const CROSS_ICON = document.getElementById("cross");
const MODAL = document.getElementsByClassName("modal");
HAMBURGER.addEventListener("click", () => {
  MODAL[0].style.display = "flex";
});
CROSS_ICON.addEventListener("click", () => {
  MODAL[0].style.display = "none";
});
const orignalLink = document.getElementById("orginalLink");
const shortedLink = document.getElementById("shortedLink");
const url = document.getElementById("url");
const shortenBtn = document.getElementById("shortenBtn");
const copyBtn = document.getElementById("copyBtn");
//Main Functionallity
const getLinks = () => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${url.value}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      shortedLink.setAttribute("href", `${res.result.full_short_link}`);
      shortedLink.innerText = res.result.full_short_link;
      orignalLink.innerText = res.result.original_link;
    })
    .catch((err) => {
      return;
    });
};
shortenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getLinks();
});
// Copy Button
copyBtn.addEventListener("click", function myFunction() {
  // Get the text field
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(shortedLink.innerText);
});
