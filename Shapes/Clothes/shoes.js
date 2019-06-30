const TAU = Zdog.TAU;

export const shoes = new Zdog.Group({
  translate: { y: 210, z: 10 }
});

const shoeL = new Zdog.RoundedRect({
  addTo: shoes,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { x: -35 },
  rotate: { x: TAU/4},
  fill: true,
  stroke: 50,
  color: '#43372E'
});

const shoeR = new Zdog.RoundedRect({
  addTo: shoes,
  width: 15,
  height: 45,
  cornerRadius: 15,
  translate: { x: 35 },
  rotate: { x: TAU/4},
  fill: true,
  stroke: 50,
  color: '#43372E'
});