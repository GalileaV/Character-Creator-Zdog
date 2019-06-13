const hairlessShape = (head) => ({
  addTo: head,
  diameter: 13,
  color: 'white',
  stroke: 0.5,
  rotate: { x: TAU/8 * 3, y: 0 },
});

const faceShape = (head) => ({
  addTo: head,
  diameter: 13,
  color: 'white',
  //backface: '#4b2c20',
  stroke: 0.5,
  //translate: { y: -0.95 },
  rotate: { x: TAU/8 * 3, y: TAU/2 },
  });

const eyeShape = (head) => ({
  addTo: head,
  diameter: 1.5,
  closed: true,
  fill: true,
  translate: { x: -2.8, y: 1, z: 5.5 },
  rotate: { z: -TAU/4 },
  color: eggplant,
  stroke: 0.5,
  backface: false,
});

const eyeShapeCopy = {
  translate: { x: 2.8, y: 1, z: 4.5 },
};

const earShape = (head) => ({
  addTo: head,
  diameter: 2,
  stroke: 1.3,
  quarters: 2,
  fill: true,
  translate: { x: 5.8, y: 0.8, z: -0.3 },
  color: offWhite,
});

const earShapeCopy = (ear) => ({
  rotate: { y: TAU/2 },
  translate: { x: -5.8, y: 0.8, z: -0.3 }
});

const mouthShape = (head) => ({
  addTo: head,
  diameter: 2.3,
  quarters: 2,
  translate: { y: 2.5, z: 5 },
  rotate: { z: TAU/4 },
  closed: true,
  color: eggplant,
  stroke: 0.5,
  fill: true,
  backface: false,
});


