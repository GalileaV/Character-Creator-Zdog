const TAU = Zdog.TAU;
const eggplant = '#636';

export const defaultMouth = new Zdog.Ellipse({
  translate: { y: -165, z: 50 },
  rotate: { z: TAU / 4 },
  diameter: 23,
  quarters: 2,
  closed: true,
  fill: true,
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const happyMouth = new Zdog.Ellipse({
  translate: { y: -165, z: 50 },
  rotate: { z: TAU / 4 },
  diameter: 23,
  quarters: 2,
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const lineMouth = new Zdog.Shape({
  translate: { y: -163, z: 50 },
  path: [{ x: -12 }, { x: 12 }],
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const dothMouth = new Zdog.Ellipse({
  translate: { y: -163, z: 50 },
  diameter: 13,
  fill: true,
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const sadMouth = new Zdog.Ellipse({
  translate: { y: -155, z: 50 },
  rotate: { z: -TAU / 4 },
  diameter: 23,
  quarters: 2,
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const surpriseMouth = new Zdog.Ellipse({
  translate: { y: -155, z: 50 },
  rotate: { z: -TAU / 4 },
  diameter: 23,
  quarters: 2,
  closed: true,
  fill: true,
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const disgustMouth = new Zdog.Shape({
  translate: { y: -163, z: 50 },
  path: [{ x: -13 }, { bezier: [{ x: -5, y: 10 }, { x: 5, y: -10 }, { x: 13 }] }],
  closed: false,
  color: eggplant,
  stroke: 5,
  backface: false,
});
