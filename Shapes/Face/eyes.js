const TAU = Zdog.TAU;
const eggplant = '#636';

export const defaultEye = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
});

  const leftEye = new Zdog.Ellipse({
    addTo: defaultEye,
    diameter: 1.5,
    closed: true,
    fill: true,
    translate: { x: -2.8 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEye = new Zdog.Ellipse({
    addTo: defaultEye,
    diameter: 1.5,
    fill: true,
    translate: { x: 2.8 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

export const happyEye = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
});

  const leftEyeH = new Zdog.Ellipse({
    addTo: happyEye,
    diameter: 1.5,
    quarters: 2,
    translate: { x: -2.8 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEyeH = new Zdog.Ellipse({
    addTo: happyEye,
    diameter: 1.5,
    quarters: 2,
    translate: { x: 2.8 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

export const lineEye = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
});

  const leftEyeL = new Zdog.Shape({
    addTo: lineEye,
    path: [{ x: -3.5 }, { x: -2 }],
    color: eggplant,
    stroke: 0.6,
    backface: false,
  });

  const rightEyel = new Zdog.Shape({
    addTo: lineEye,
    path: [{ x: 3.5 }, { x: 2 }],
    color: eggplant,
    stroke: 0.6,
    backface: false,
  });