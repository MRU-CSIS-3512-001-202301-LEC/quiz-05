// http://127.0.0.1:8080/2-sort-event/

const LAPS = [8, 12, 6.5, 111, 16, 9, 8];

const BTN = document.querySelector("button");
const BODY = document.querySelector("body");

function orderedListFrom(nums) {
  const ol = document.createElement("ol");
  const liElems = nums.map((num) => asListElem(num));
  ol.append(...liElems);
  return ol;
}

function asListElem(num) {
  const li = document.createElement("li");
  li.textContent = num;
  return li;
}

function sortList() {
  document.querySelector("ol").remove(); // kill old one
  LAPS.sort((a, b) => a - b);
  BODY.append(orderedListFrom(LAPS));
}

BODY.append(orderedListFrom(LAPS));

BTN.addEventListener("click", sortList);
