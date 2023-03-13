let players = [
  {
    nick: "sm00th",
    highScore: 212,
  },
  {
    nick: "r3d h3d",
    highScore: 301,
  },
  {
    nick: "@@sMILz@@",
    highScore: 192,
  },
];

function playerDiv(player) {
  let div = document.createElement("div");
  div.id = "container";

  let nickSpan = document.createElement("span");
  nickSpan.textContent = player.nick;

  let scoreSpan = document.createElement("span");
  scoreSpan.textContent = player.highScore;

  if (player.highScore > 200) {
    scoreSpan.classList.add("elite");
  }

  div.append(nickSpan, scoreSpan);

  return div;
}

let pThings = players.map((p) => playerDiv(p));

document.querySelector("body").append(pThings.shift());
