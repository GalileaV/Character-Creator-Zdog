const illoShape = {
  element: '.zdog-canvas',
  zoom: 7,
  dragRotate: true,
};

const hipsShape = (illo) => ({
  addTo: illo,
  path: [ { x: 2.3 }, { x: -2.3 } ],
  stroke: 7,
});

const legShape = (hips) => ({
  addTo: hips,
  path: [{y: 0}, {y: 15}],
  translate: {x: -3.3, z: -0.2},
  stroke: 5
});

const footShape = (leg) => ({
  addTo: leg,
  width: 1.5,
  height: 4.5,
  cornerRadius: 1.5,
  translate: {y: 18, z: 1},
  rotate: { x: TAU/4},
  color: "gray",
  fill: true,
  stroke: 5,
});

const legShapeCopy = {
  translate: { x: 3.3, z: -0.2 },
};