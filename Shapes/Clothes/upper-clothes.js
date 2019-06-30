const TAU = Zdog.TAU;

export const shirt = new Zdog.Group({});

const chest = new Zdog.Rect({
  addTo: shirt,
  width: 35,
  height: 55,
  translate: { y: -55 },
  stroke: 65,
  color: '#F71313',
});

const armUpL = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: -50, y: -25 },
  stroke: 45,
  rotate: { z: TAU / 10 },
  color: '#F71313',
});

const armUpR = new Zdog.Shape({
  addTo: chest,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: 50, y: -25 },
  stroke: 45,
  rotate: { z: -TAU / 10 },
  color: '#F71313',
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

export const longShirt = new Zdog.Group({});

const chestL = new Zdog.Rect({
  addTo: longShirt,
  width: 35,
  height: 55,
  translate: { y: -55 },
  stroke: 65,
  color: '#555351',
});

const armUpLeftL = new Zdog.Shape({
  addTo: chestL,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: -50, y: -25 },
  stroke: 45,
  rotate: { z: TAU / 10 },
  color: '#555351',
});

const armUpRightL = new Zdog.Shape({
  addTo: chestL,
  path: [{ y: 0 }, { y: 35 }],
  translate: { x: 50, y: -25 },
  stroke: 45,
  rotate: { z: -TAU / 10 },
  color: '#555351',
});

const armDownLeftL = new Zdog.Shape({
  addTo: armUpLeftL,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 45,
  color: '#555351',
});

const armDownRightL = new Zdog.Shape({
  addTo: armUpRightL,
  path: [{ y: 35 }, { y: 100 }],
  stroke: 45,
  color: '#555351',
});
