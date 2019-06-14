export const simpleHairShape = (TAU, head) => ({
    addTo: head,
    diameter: 15,
    color: '#4b2c20',
    translate: { y: 0, z:-0.3 },
    stroke: 0.5,
    rotate: { x: TAU/8 * 3, y: 0 }
});

export const topKnotShape = (simpleHair) => ({
    addTo: simpleHair,
    stroke: 5,
    color: '#4b2c20',
    translate: { z: 9 }
});

export const knotShape = (simpleHair1) => ({
    addTo: simpleHair1,
    stroke: 5,
    color: '#4b2c20',
    translate: { z: 7, x: -6 }
});

export const knotShapeCopy = (simpleHair1) => ({
    translate: { z: 7, x: 6 }
  }); 
