// Varables
const HAMBURGER = document.getElementById("hambburger");
const CROSS_ICON = document.getElementById("cross");
const MODAL = document.getElementsByClassName("modal");
const orignalLink = document.getElementById("orginalLink");
const shortedLink = document.getElementById("shortedLink");
const url = document.getElementById("url");
const shortenBtn = document.getElementById("shortenBtn");
const copyBtn = document.getElementById("copyBtn");
// Basic Functionality
HAMBURGER.addEventListener("click", () => {
  MODAL[0].style.display = "flex";
});
CROSS_ICON.addEventListener("click", () => {
  MODAL[0].style.display = "none";
});
let SHORTENLINKED;
//Main Functionallity
const getLinks = async() => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${url.value}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      shortedLink.setAttribute("href", `${res.result.full_short_link}`);
      shortedLink.innerText = res.result.full_short_link;
      orignalLink.innerText = res.result.original_link;
      SHORTENLINKED=res.result.full_short_link;
    })
    .catch((err) => {
      return;
    });
  };
  copyBtn.addEventListener('click',(e)=>{
e.preventDefault();
  })
// Copy Button
const textToCopy = SHORTENLINKED;
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    copyBtn.innerText = "copied";
    copyBtn.style.background = "#3b3054";
    copyBtn.style.color = "#fff";
    copyBtn.style.borderColor = "#3b3054";
    setTimeout(() => {
      copyBtn.innerText = "copy";
      copyBtn.style.background = "hsl(180, 66%, 49%)";
      copyBtn.style.color = "#fff";
      copyBtn.style.borderColor = "hsl(180, 66%, 49%)";
    }, 3000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});
