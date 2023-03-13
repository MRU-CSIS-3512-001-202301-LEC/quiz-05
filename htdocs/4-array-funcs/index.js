const adventurers = [
  {
    name: "Flame of the Evading Desert",
    class: "Rogue",
    level: 6,
  },
  {
    name: "Zog Mothra",
    class: "Wizard",
    level: 3,
  },
  {
    name: "Jampa",
    class: "Barbarian",
    level: 5,
  },
  {
    name: "Jazrik",
    class: "Wizard",
    level: 5,
  },
];

let findResult = adventurers.find((e) => e.level === 5);
console.log(findResult.name);

let filterResults = adventurers.filter((e) => e.level > 3 && e.level < 6);

filterResults[1].alignment = "CE";

for (const adv of adventurers) {
  console.log(`${adv.level}: ${adv.alignment}`);
}
