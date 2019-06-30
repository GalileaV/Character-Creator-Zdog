const TAU = Zdog.TAU;
const offWhite = '#FED';

export const defaultEar = new Zdog.Group({
  translate: { y: -180 },
});

const rightEar = new Zdog.Ellipse({
  addTo: defaultEar,
  diameter: 20,
  stroke: 13,
  quarters: 2,
  closed: true,
  fill: true,
  translate: { x: 65 },
  color: offWhite,
});

const leftEar = rightEar.copy({
  rotate: { y: TAU / 2 },
  translate: { x: -65 },
});

export const earingEar = new Zdog.Group({
  translate: { y: -180 },
});

const rightEarE = new Zdog.Ellipse({
  addTo: earingEar,
  diameter: 20,
  stroke: 13,
  quarters: 2,
  closed: true,
  fill: true,
  translate: { x: 65 },
  color: offWhite,
});

const leftEarE = rightEarE.copy({
  rotate: { y: TAU / 2 },
  translate: { x: -65 },
});

const leaftEaring = new Zdog.Shape({
  addTo: earingEar,
  stroke: 8,
  translate: { x: -71, y: 9 },
  color: 'gray',
});

const rightEaring = leaftEaring.copy({
  translate: { x: 71, y: 9 },
});

export const ringEar = new Zdog.Group({
  translate: { y: -180 },
});

const rightEarR = new Zdog.Ellipse({
  addTo: ringEar,
  diameter: 20,
  stroke: 13,
  quarters: 2,
  closed: true,
  fill: true,
  translate: { x: 65 },
  color: offWhite,
});

const leftEarR = rightEarR.copy({
  rotate: { y: TAU / 2 },
  translate: { x: -65 },
});

const leaftRing = new Zdog.Ellipse({
  addTo: ringEar,
  diameter: 25,
  quarters: 3,
  stroke: 5,
  translate: { x: -71, y: 15 },
  rotate: { y: TAU / 4, x: -TAU / 6 },
  color: 'gray',
});

const rightRing = leaftRing.copy({
  translate: { x: 71, y: 15 },
});
