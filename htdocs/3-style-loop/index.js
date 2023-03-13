function alterOL() {
  let targetLi = document.querySelectorAll("ol li");

  for (let li of targetLi) {
    li.classList.remove("faded");
  }
}

alterOL();
