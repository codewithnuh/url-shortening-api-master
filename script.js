//
let url = fetch(
  "https://api.shrtco.de/v2/shorten?url=https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
);
url
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.result.full_short_link);
  })
  .catch((err) => {
    console.log("you got some error");
  });
