const closedDiv = document.querySelector(".closed-div");
const closedBtn = document.querySelector(".closed-btn");
const harmburger = document.querySelector(".harmburger");

harmburger.addEventListener("click", () => {
  harmburger.style.display = "none";
  closedDiv.style.display = "block";
});

closedBtn.addEventListener("click", () => {
  harmburger.style.display = "block";
  closedDiv.style.display = "none";
});
