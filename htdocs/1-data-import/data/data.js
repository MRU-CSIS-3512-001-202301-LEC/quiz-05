const terrain = {
  name: "The Badlands",
  lethality: 3,
  coord: {
    row: 3,
    col: 4,
  },
  toString: function () {
    return `${this.name.toUpperCase()} - ${this.lethality / 10}`;
  },
};

export { terrain };
