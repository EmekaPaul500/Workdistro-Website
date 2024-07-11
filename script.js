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

let waitlistTrigger = document.getElementById("waiter");
let contactTrigger = document.getElementById("waitress");
let footer = document.getElementById("footerTarget");
let form = document.getElementById("formTarget");

waitlistTrigger.addEventListener("click", () => {
  harmburger.style.display = "block";
  closedDiv.style.display = "none";
  form.scrollIntoView({ behavior: "smooth" });
});
contactTrigger.addEventListener("click", () => {
  harmburger.style.display = "block";
  closedDiv.style.display = "none";
  footer.scrollIntoView({ behavior: "smooth" });
});
