const TAU = Zdog.TAU;
const eggplant = '#636';

export const defaultEyebrow = new Zdog.Group({
  translate: { y: -200, z: 55 },
});

const leftEyebrow = new Zdog.Shape({
  addTo: defaultEyebrow,
  path: [{ x: -40, y: 3 }, { bezier: [{ x: -30, y: -3 }, { x: -20 }, { x: -20 }] }],
  closed: false,
  color: eggplant,
  stroke: 4,
});

const rightEyebrow = leftEyebrow.copy({
  path: [{ x: 40, y: 3 }, { bezier: [{ x: 30, y: -3 }, { x: 20 }, { x: 20 }] }],
});

export const sadEyebrow = new Zdog.Group({
  translate: { y: -200, z: 55 },
});

const leftEyebrowS = new Zdog.Shape({
  addTo: sadEyebrow,
  path: [{ x: -40, y: 3 }, { bezier: [{ x: -30, y: 3 }, { x: -20 }, { x: -20 }] }],
  closed: false,
  color: eggplant,
  stroke: 4,
});

const rightEyebrowS = leftEyebrowS.copy({
  path: [{ x: 40, y: 3 }, { bezier: [{ x: 30, y: 3 }, { x: 20 }, { x: 20 }] }],
});

export const confusedEyebrow = new Zdog.Group({
  translate: { y: -200, z: 55 },
});

const leftEyebrowC = new Zdog.Shape({
  addTo: confusedEyebrow,
  path: [{ x: -40, y: 3 }, { bezier: [{ x: -30, y: 3 }, { x: -20 }, { x: -20 }] }],
  closed: false,
  color: eggplant,
  stroke: 4,
});

const rightEyebrowC = leftEyebrowC.copy({
  path: [{ x: 40, y: 3 }, { bezier: [{ x: 30, y: -3 }, { x: 20 }, { x: 20 }] }],
});

export const angryEyebrow = new Zdog.Group({
  translate: { y: -200, z: 55 },
});

const leftEyebrowA = new Zdog.Shape({
  addTo: angryEyebrow,
  path: [{ x: -40, y: -2 }, { x: -17, y: 8 }],
  closed: false,
  color: eggplant,
  stroke: 4,
});

const rightEyebrowA = leftEyebrowA.copy({
  path: [{ x: 40, y: -2 }, { x: 17, y: 8 }],
});
