const ratedState = document.querySelector(".rated-state");
const ratingState = document.querySelector(".rating-state");
const ratingBtns = document.querySelectorAll("[data-rating-btn]");
const submitBtn = document.querySelector(".submit-btn");
const ratedValue = document.querySelector("[data-rated-value]");
let rate = null;
ratingBtns.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", (e) => {
    const active = document.querySelector(".selected");
    console.log(active);
    if (active) {
      ratingBtn.classList.remove("selected");
    }
    ratingBtn = e.target;
    ratingBtn.classList.add("selected");
    rate = ratingBtn.textContent;
    console.log(rate);
  });
});

submitBtn.addEventListener("click", () => {
  if (rate) {
    ratedValue.innerText = rate;
    ratingState.classList.add("hidden");
    ratedState.classList.remove("hidden");
  }
});
