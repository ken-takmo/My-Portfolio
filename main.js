const borochureAppUrl = "https://kens-travel-brochure.web.app/";
const reviewAppUrl = "https://ken-takmo.github.io/book-review-app/";
const brochureImg = document.getElementById("brochure");
const reviewImg = document.getElementById("review-app");
function toApp(url) {
  window.open(url);
}

brochureImg.addEventListener("click", () => toApp(borochureAppUrl));
reviewImg.addEventListener("click", () => toApp(reviewAppUrl));
