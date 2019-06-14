export const chestShape = (hips) => ({
  addTo: hips,
  path: [ { y: 2 }, { y: -1 } ],
  translate: { y: -8 },
  stroke: 11,
  color: '#879aab'
});

export const neckShape = (chest) => ({
  addTo: chest,
  path: [ { y: 0.8 }, { y: -0.8 } ],
  translate: { y: -7.5 },
  stroke: 3,
  color: 'white'
});

export const headShape = (neck) => ({
  addTo: neck,
  translate: { y: -5.5 },
});

export const armShape = (TAU, chest) => ({
  addTo: chest,
  path: [ { y: 0 }, { y: 8 } ],
  translate: { x: -5, y: -2 },
  rotate: { z: TAU/10 },
  color: '#788da0',
  stroke: 4,
});

export const handShape = (arm) => ({
  addTo: arm,
  translate: { y: 10 },
  stroke: 5,
  color: 'white',
});

export const armShapeCopy = (TAU, arm) => ({
  translate: { x: 5, y: -2},
  rotate: { z: -TAU/10}
});