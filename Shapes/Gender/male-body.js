const TAU = Zdog.TAU;

export const maleBody = new Zdog.Group({});

const HeadGroup = new Zdog.Group({
  addTo: maleBody,
  translate: { y: -115 },
});

const neck = new Zdog.Shape({
  addTo: HeadGroup,
  path: [{ y: 0 }, { y: -8 }],
  stroke: 30,
  color: 'white',
});

const head = new Zdog.Hemisphere({
  addTo: neck,
  diameter: 130,
  translate: { y: -75 },
  rotate: { x: (TAU / 8) * 3, y: TAU / 2 },
  stroke: 5,
  color: 'white',
});

const LowerBodyGroup = new Zdog.Group({
  addTo: maleBody,
  translate: { y: 30, z: -5 },
});

const hips = new Zdog.Shape({
  addTo: LowerBodyGroup,
  path: [{ x: 10 }, { x: -10 }],
  stroke: 90,
});

const thigh = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  translate: { x: -33, z: -2 },
  stroke: 50,
  color: 'white',
});

const thigh2 = new Zdog.Shape({
  addTo: hips,
  path: [{ y: 30 }, { y: 100 }],
  translate: { x: 33, z: -2 },
  stroke: 50,
  color: 'white',
});

const leg = new Zdog.Shape({
  addTo: thigh,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});

const leg2 = new Zdog.Shape({
  addTo: thigh2,
  path: [{ y: 100 }, { y: 150 }],
  stroke: 50,
  color: 'white',
});

const foot = new Zdog.RoundedRect({
  addTo: leg,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { y: 180, z: 10 },
  rotate: { x: TAU / 4 },
  fill: true,
  stroke: 50,
  color: 'white',
});

const foot2 = new Zdog.RoundedRect({
  addTo: leg2,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { y: 180, z: 10 },
  rotate: { x: TAU / 4 },
  fill: true,
  stroke: 50,
  color: 'white',
});

const UpperBodyGroup = new Zdog.Group({
  addTo: maleBody,
});

const chest = new Zdog.Rect({
  addTo: UpperBodyGroup,
  width: 35,
  height: 55,
  translate: { y: -55 },
  stroke: 60,
  color: 'white',
});

const armUpL = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: -50, y: -25 },
  stroke: 40,
  rotate: { z: TAU / 10 },
  color: 'white',
});

const armUpR = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: 50, y: -25 },
  stroke: 40,
  rotate: { z: -TAU / 10 },
  color: 'white',
});

const armDownL = new Zdog.Shape({
  addTo: armUpL,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 40,
  color: 'white',
});

const armDownR = new Zdog.Shape({
  addTo: armUpR,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 40,
  color: 'white',
});

const handLeft = new Zdog.Shape({
  addTo: armDownL,
  translate: { y: 120 },
  stroke: 50,
  color: 'white',
});

const handRight = new Zdog.Shape({
  addTo: armDownR,
  translate: { y: 120 },
  stroke: 50,
  color: 'white',
});
