let picsumData = { id: 242, dim: 40, alt: "making tracks" };

function picsumImg(picsumData) {
  let img = document.createElement("img");
  img.src = `https://picsum.photos/id/${picsumData.id}/${picsumData.dim}`;
  img.alt = picsumData.alt;
  return img;
}

function picBoxFrom(picsumData, boxText) {
  let div = document.createElement("div");
  div.classList.add("pic-box");

  let span = document.createElement("span");
  span.textContent = boxText;
  span.style.marginLeft = "30px";

  div.append(picsumImg(picsumData));
  div.append(span);

  return div;
}

let thingToAppend = picBoxFrom(picsumData, "make trax");

document.querySelector("div#container").append(thingToAppend);
