const TAU = Zdog.TAU;
const eggplant = '#636';

export const defaultEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEye = new Zdog.Ellipse({
  addTo: defaultEyes,
  diameter: 15,
  fill: true,
  translate: { x: -28 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEye = leftEye.copy({
  translate: { x: 28 },
});

export const happyEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeH = new Zdog.Ellipse({
  addTo: happyEyes,
  diameter: 15,
  quarters: 2,
  translate: { x: -28 },
  rotate: { z: -TAU / 4 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEyeH = leftEyeH.copy({
  translate: { x: 28 },
});

export const lineEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeL = new Zdog.Shape({
  addTo: lineEyes,
  path: [{ x: -35 }, { x: -20 }],
  color: eggplant,
  stroke: 6,
  backface: false,
});

const rightEyeL = leftEyeL.copy({
  path: [{ x: 35 }, { x: 20 }],
});

export const closeEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeC = new Zdog.Ellipse({
  addTo: closeEyes,
  diameter: 15,
  quarters: 2,
  translate: { x: -28 },
  rotate: { z: TAU / 4 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEyeC = leftEyeC.copy({
  translate: { x: 28 },
});

export const winkEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeW = new Zdog.Ellipse({
  addTo: winkEyes,
  diameter: 15,
  fill: true,
  translate: { x: -28 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEyeW = new Zdog.Shape({
  addTo: winkEyes,
  closed: false,
  path: [{ x: 35, y: -5 }, { x: 20 }, { x: 35, y: 5 }],
  color: eggplant,
  stroke: 5,
  backface: false,
});

export const strongEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeS = new Zdog.Shape({
  addTo: strongEyes,
  closed: false,
  path: [{ x: -35, y: 5 }, { x: -20 }, { x: -35, y: -5 }],
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEyeS = leftEyeS.copy({
  path: [{ x: 35, y: 5 }, { x: 20 }, { x: 35, y: -5 }],
});

export const tiredEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeT = new Zdog.Ellipse({
  addTo: tiredEyes,
  diameter: 15,
  quarters: 2,
  closed: true,
  fill: true,
  translate: { x: -28 },
  rotate: { z: TAU / 4 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const leftLineEye = new Zdog.Shape({
  addTo: tiredEyes,
  path: [{ x: -40 }, { x: -20 }],
  color: eggplant,
  stroke: 5,
});

const rightEyeT = leftEyeT.copy({
  translate: { x: 28 },
});

const rightLineEye = leftLineEye.copy({
  path: [{ x: 40 }, { x: 20 }],
});

export const angryEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeA = new Zdog.Ellipse({
  addTo: angryEyes,
  diameter: 15,
  quarters: 2,
  closed: true,
  fill: true,
  translate: { x: -28 },
  rotate: { z: TAU / 3 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const leftLineEyeA = new Zdog.Shape({
  addTo: angryEyes,
  path: [{ x: -38, y: -6 }, { x: -20, y: 3 }],
  color: eggplant,
  stroke: 5,
});

const rightEyeA = leftEyeA.copy({
  translate: { x: 28 },
  rotate: { z: TAU / 6 },
});

const rightLineEyeA = leftLineEyeA.copy({
  path: [{ x: 38, y: -6 }, { x: 20, y: 3 }],
});

export const lashesEyes = new Zdog.Group({
  translate: { y: -180, z: 55 },
});

const leftEyeLa = new Zdog.Ellipse({
  addTo: lashesEyes,
  diameter: 15,
  fill: true,
  translate: { x: -28 },
  color: eggplant,
  stroke: 5,
  backface: false,
});

const rightEyeLa = leftEyeLa.copy({
  translate: { x: 28 },
});

const leftLash = new Zdog.Shape({
  addTo: lashesEyes,
  translate: { x: -28 },
  path: [{ x: -12, y: -4 }, { x: -8, y: -2 }],
  color: eggplant,
  stroke: 6,
  backface: false,
});

const rightLash = leftLash.copy({
  translate: { x: 28 },
  path: [{ x: 12, y: -4 }, { x: 8, y: -2 }],
});
