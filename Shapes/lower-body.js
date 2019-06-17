export const illoShape = {
  element: '.zdog-canvas',
  zoom: 10,
  dragRotate: true,
};

export const hipsShape = (illo) => ({
  addTo: illo,
  path: [ { x: 2.3 }, { x: -2.3 } ],
  stroke: 7,
});

export const legShape = (hips) => ({
  addTo: hips,
  path: [{ y: 1 }, { y: 15 }],
  translate: { x: -3.3 },
  stroke: 5,
});

export const footShape = (TAU, leg) => ({
  addTo: leg,
  width: 1.5,
  height: 4.5,
  cornerRadius: 1.5,
  translate: { y: 18, z: 1 },
  rotate: { x: TAU/4 },
  color: "gray",
  fill: true,
  stroke: 5,
});

export const footShapeCopy = (leg) => ({
  translate: { y: 18, z: 1, x: 6.6 }
})

export const legShapeCopy = (hips) => ({
  translate: { x: 3.3 },
});