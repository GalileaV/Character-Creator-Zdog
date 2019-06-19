const TAU = Zdog.TAU;
const eggplant = '#636';

export const defaultMouth = new Zdog.Ellipse({
  translate: { y: -16.5, z: 5 },
  rotate: { z: TAU/4 },
  diameter: 2.3,
  quarters: 2,
  closed: true,
  fill: true,
  color: eggplant,
  stroke: 0.5,
  backface: false
});

export const happyMouth = new Zdog.Ellipse({
  translate: { y: -16.5, z: 5 },
  rotate: { z: TAU/4 },
  diameter: 2.3,
  quarters: 2,
  color: eggplant,
  stroke: 0.5,
  backface: false
});

export const lineMouth = new Zdog.Shape({
  translate: { y: -16.3, z: 5 },
  path: [ { x: -1.2 }, { x: 1.2 } ],
  color: eggplant,
  stroke: 0.5,
  backface: false,
});

export const dothMouth = new Zdog.Ellipse({
  translate: { y: -16.3, z: 5 },
  diameter: 1.3,
  fill: true,
  color: eggplant,
  stroke: 0.5,
  backface: false,
});

export const sadMouth = new Zdog.Ellipse({
  translate: { y: -15.5, z: 5 },
  rotate: { z: -TAU/4 },
  diameter: 2.3,
  quarters: 2,
  color: eggplant,
  stroke: 0.5,
  backface: false
});

export const sorpriseMouth = new Zdog.Ellipse({
  translate: { y: -15.5, z: 5 },
  rotate: { z: -TAU/4 },
  diameter: 2.3,
  quarters: 2,
  closed: true,
  fill: true,
  color: eggplant,
  stroke: 0.5,
  backface: false
});

export const disgustMouth = new Zdog.Shape({
  translate: { y: -16.3, z: 5 },
  path: [ 
    { x: -1.3 }, 
    { bezier: [
      { x: -0.5, y: 1 },
      { x: 0.5, y: -1 },
      { x: 1.3 }, 
    ]},
  ],
  closed: false,
  color: eggplant,
  stroke: 0.5,
  backface: false,
});