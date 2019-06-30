const TAU = Zdog.TAU;

export const sword = new Zdog.Group({
  translate: { x: -180, y: -90, z: 90 },
  rotate: { x: -TAU / 30, y: -TAU / 8, z: -TAU / 10 },
});

const handle = new Zdog.Shape({
  addTo: sword,
  path: [{ x: -40, y: 110 }, { x: 40, y: 110 }],
  stroke: 20,
  color: '#9197A1',
});

const handleDown = new Zdog.Shape({
  addTo: handle,
  path: [{ y: 170 }, { y: 110 }],
  stroke: 20,
  color: '#9197A1',
});

const rightBlade = new Zdog.Shape({
  addTo: handle,
  path: [
    { x: 2, y: -180 },
    { x: 30, y: -140 },
    { x: 20, y: 100 },
    { x: 2, y: 100 },
    { x: 2, y: -180 },
  ],
  fill: true,
  closed: false,
  stroke: 10,
  color: '#E0E4EB',
});
const leftBlade = new Zdog.Shape({
  addTo: handle,
  path: [
    { x: -4, y: -180 },
    { x: -30, y: -140 },
    { x: -20, y: 100 },
    { x: -4, y: 100 },
    { x: -4, y: -180 },
  ],
  fill: true,
  closed: false,
  stroke: 10,
  color: '#EDEFF3',
});

export const shield = new Zdog.Group({
  translate: { x: 145, y: 30, z: 10 },
  rotate: { y: TAU / 3 },
});

const leftBladeS = new Zdog.Shape({
  addTo: shield,
  path: [
    { x: -3, y: -135 },
    { bezier: [{ x: -66, y: -105 }, { x: -66, y: -105 }, { x: -112.5, y: -105 }] },
    { bezier: [{ x: -66, y: 60 }, { x: -66, y: 60 }, { x: -3, y: 75 }] },
    { x: -3, y: -135 },
  ],
  fill: true,
  closed: false,
  stroke: 10,
  color: '#EDEFF3',
});

const rigthBladeS = leftBladeS.copy({
  path: [
    { x: 3, y: -135 },
    { bezier: [{ x: 66, y: -105 }, { x: 66, y: -105 }, { x: 112.5, y: -105 }] },
    { bezier: [{ x: 66, y: 60 }, { x: 66, y: 60 }, { x: 3, y: 75 }] },
    { x: 3, y: -135 },
  ],
  color: '#E0E4EB',
});
