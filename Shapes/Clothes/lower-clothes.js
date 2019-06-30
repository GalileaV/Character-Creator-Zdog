const TAU = Zdog.TAU;

export const jeans = new Zdog.Group({
  translate: { y: 30, z: -5 },
});

const hips = new Zdog.Shape({
  addTo: jeans,
  path: [{ x: 10 }, { x: -10 }],
  stroke: 95,
  color: '#344865',
});

const thigh = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  //rotate: { x: -TAU/9 },
  translate: { x: -33, z: -2 },
  stroke: 55,
  color: '#344865',
});

const thigh2 = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  //rotate: { x: -TAU/9 },
  translate: { x: 33, z: -2 },
  stroke: 55,
  color: '#344865',
});

const leg = new Zdog.Shape({
  addTo: thigh,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 55,
  color: '#344865',
});

const leg2 = new Zdog.Shape({
  addTo: thigh2,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 55,
  color: '#344865',
});

export const short = new Zdog.Group({
  translate: { y: 30, z: -5 },
});

const hipsS = new Zdog.Shape({
  addTo: short,
  path: [{ x: 10 }, { x: -10 }],
  stroke: 95,
  color: '#987B63',
});

const thighS = new Zdog.Shape({
  addTo: hipsS,
  path: [{ y: 30 }, { y: 85 }],
  //rotate: { x: -TAU/9 },
  translate: { x: -33, z: -2 },
  stroke: 55,
  color: '#987B63',
});

const thigh2S = new Zdog.Shape({
  addTo: hipsS,
  path: [{ y: 30 }, { y: 85 }],
  //rotate: { x: -TAU/9 },
  translate: { x: 33, z: -2 },
  stroke: 55,
  color: '#987B63',
});

const legS = new Zdog.Shape({
  addTo: thighS,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});

const leg2S = new Zdog.Shape({
  addTo: thigh2S,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});
