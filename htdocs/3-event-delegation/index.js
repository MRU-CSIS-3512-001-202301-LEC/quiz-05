const SPAN = document.querySelector("span");

SPAN.addEventListener("click", (e) => {
  console.log(e.target);
});

document
  .querySelector("#outer")
  .addEventListener("click", (e) => console.log(e.target));

document
  .querySelector("#nextTo")
  .addEventListener("click", (e) => console.log(e.target));

document.querySelector("body").addEventListener("click", (e) => {
  console.log("body: ", e.target);
});
