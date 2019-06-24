const TAU = Zdog.TAU;
const hair = '#424242';

export const defaultHair = new Zdog.Hemisphere({
  translate: { y: -190 },
  rotate: { x: (TAU / 8) * 3 },
  diameter: 130,
  color: 'white',
  stroke: 5,
});

export const simpleHair = new Zdog.Hemisphere({
  translate: { y: -190 },
  rotate: { x: (TAU / 8) * 3 },
  diameter: 145,
  color: hair,
  stroke: 5,
});

export const longHair = new Zdog.Group({
  translate: { y: -190 },
});

const simpleHairL = new Zdog.Hemisphere({
  addTo: longHair,
  rotate: { x: (TAU / 8) * 3 },
  diameter: 145,
  color: hair,
  stroke: 5,
});

const backHair = new Zdog.Rect({
  addTo: longHair,
  width: 60,
  height: 100,
  stroke: 50,
  fill: true,
  color: hair,
  translate: { y: 60, z: -50 },
  rotate: { x: -TAU / 20 },
});

const leftHair = new Zdog.Shape({
  addTo: longHair,
  path: [{ x: -60, y: -10 }, { x: -60, y: 117 }, { x: -60, y: 117, z: -60 }],
  stroke: 30,
  fill: true,
  color: hair,
});

const rightHair = leftHair.copy({
  translate: { x: 120 },
});

export const topKnotHair = new Zdog.Group({
  translate: { y: -190 },
});

const simpleHairT = new Zdog.Hemisphere({
  addTo: topKnotHair,
  rotate: { x: (TAU / 8) * 3 },
  diameter: 145,
  color: hair,
  stroke: 5,
});

const knotT = new Zdog.Shape({
  addTo: topKnotHair,
  stroke: 60,
  color: hair,
  translate: { z: -75, y: -60 },
});

export const knotsHair = new Zdog.Group({
  translate: { y: -190 },
});

const simpleHairK = new Zdog.Hemisphere({
  addTo: knotsHair,
  rotate: { x: (TAU / 8) * 3 },
  diameter: 145,
  color: hair,
  stroke: 5,
});

const leftKnot = new Zdog.Shape({
  addTo: knotsHair,
  stroke: 50,
  color: hair,
  translate: { x: -60, y: -40, z: -55 },
});

const rightKnot = leftKnot.copy({
  translate: { x: 60, y: -40, z: -55 },
});

export const afroHair = new Zdog.Ellipse({
  translate: { y: -230, z: -45 }
  rotate: { x: (TAU / 8) * 3 },
  diameter: 70,
  fill: true,
  color: hair,
  stroke: 150,
});

export const mohicanHair = new Zdog.Group({
  translate: { y: -190 },
});

const simpleHairM = new Zdog.Hemisphere({
  addTo: mohicanHair,
  rotate: { x: (TAU / 8) * 3 },
  diameter: 145,
  color: hair,
  stroke: 5,
});

const mohican = new Zdog.Ellipse({
  addTo: mohicanHair,
  diameter: 165,
  quarters: 2,
  translate: { y: -10, z: -6 },
  rotate: { y: TAU/4, x: (TAU / 8) * 3 },
  stroke: 40
});