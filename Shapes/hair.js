const simpleHairShape = (head) => ({
    addTo: head,
    diameter: 15,
    color: '#4b2c20',
    translate: { y: 0, z:-0.3 },
    stroke: 0.5,
    rotate: { x: TAU/8 * 3, y: 0 }
});

const topKnotShape = (simpleHair) => ({
    addTo: simpleHair,
    stroke: 5,
    color: '#4b2c20',
    translate: { z: 9 }
});
