const LAPS_COMPLETED = [8, 12, 6.5, 111, 16, 9, 8];
const OL = document.querySelector("ol");
const BTN = document.querySelector("button");

function asLi(num) {
  const li = document.createElement("li");
  li.textContent = num;
  return li;
}

let lapList = LAPS_COMPLETED.map((lap) => asLi(lap));

OL.append(...lapList);

function sortList() {
  LAPS_COMPLETED.sort((a, b) => a - b);
  let lapList = LAPS_COMPLETED.map((lap) => asLi(lap));
  OL.replaceChildren(); // gotcha!
  OL.append(...lapList);
}

BTN.addEventListener("click", sortList);
