const TAU = Zdog.TAU;

export const maleBody = new Zdog.Group({
});

export const HeadGroup = new Zdog.Group({
  addTo: maleBody,
  translate: { y: -11.5 }
});

export const neck = new Zdog.Shape({
  addTo: HeadGroup,
  path: [ { y: 0 }, { y: -0.8 } ],
  stroke: 3,
  color: 'white'
})

export const head = new Zdog.Hemisphere({
  addTo: neck,
  diameter: 13,
  translate: { y: -7.5 },
  rotate: { x: TAU/8 * 3, y: TAU/2 },
  stroke: 0.5,
  color: 'white',
});

export const LowerBodyGroup = new Zdog.Group({
  addTo: maleBody,
  translate: { y: 3, z: -0.5 }
});

export const hips = new Zdog.Shape({
  addTo: LowerBodyGroup,
  path: [ { x: 1 }, { x: -1 } ],
  stroke: 9,
});

export const thigh = new Zdog.Shape({
  addTo: hips,
  path: [ { y: 3 }, { y: 10 } ],
  translate: { x: -3.3, z: -0.2 },
  stroke: 5,
  color: 'white'
});

export const thigh2 = new Zdog.Shape({
  addTo: hips,
  path: [ { y: 3 }, { y: 10 } ],
  translate: { x: 3.3, z: -0.2 },
  stroke: 5,
  color: 'white'
});

export const leg = new Zdog.Shape({
  addTo: thigh,
  path: [ { y: 10 }, { y: 15 } ],
  stroke: 5,
  color: 'white'
});

export const leg2 = new Zdog.Shape({
  addTo: thigh2,
  path: [ { y: 10 }, { y: 15 } ],
  stroke: 5,
  color: 'white'
});

export const foot = new Zdog.RoundedRect({
  addTo: leg,
  width: 1.5,
  height: 4.5,
  cornerRadius: 1.5,
  translate: { y: 18, z: 1 },
  rotate: { x: TAU/4 },
  fill: true,
  stroke: 5,
  color: 'white'
});

export const foot2 = new Zdog.RoundedRect({
  addTo: leg2,
  width: 1.5,
  height: 4.5,
  cornerRadius: 1.5,
  translate: { y: 18, z: 1 },
  rotate: { x: TAU/4 },
  fill: true,
  stroke: 5,
  color: 'white'
});

export const UpperBodyGroup = new Zdog.Group({
  addTo: maleBody,
});

export const chest = new Zdog.Rect({
  addTo: UpperBodyGroup,
  width: 3.5,
  height: 5.5,
  translate: { y: -5.5 },
  stroke: 6,
  color: 'white'
});

export const armUpL = new Zdog.Shape({
  addTo: chest,
  path: [ { y: 0 }, { y: 3.5 } ],
  translate: { x: -5, y: -2.5 },
  stroke: 4,
  rotate: { z: TAU/10 },
  color: 'white'
});

export const armUpR = new Zdog.Shape({
  addTo: chest,
  path: [ { y: 0 }, { y: 3.5 } ],
  translate: { x: 5, y: -2.5 },
  stroke: 4,
  rotate: { z: -TAU/10 },
  color: 'white'
});

export const armDownL = new Zdog.Shape({
  addTo: armUpL,
  path: [ { y: 3.5 }, { y: 10 } ],
  stroke: 4,
  color: 'white',
});

export const armDownR = new Zdog.Shape({
  addTo: armUpR,
  path: [ { y: 3.5 }, { y: 10 } ],
  stroke: 4,
  color: 'white',
});

export const handLeft = new Zdog.Shape({
  addTo: armDownL,
  translate: { y: 12 },
  stroke: 5,
  color: 'white',
});

export const handRight = new Zdog.Shape({
  addTo: armDownR,
  translate: { y: 12 },
  stroke: 5,
  color: 'white',
});
