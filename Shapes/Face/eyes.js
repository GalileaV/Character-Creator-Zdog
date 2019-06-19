const TAU = Zdog.TAU;
const eggplant = '#636';


export const defaultEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEye = new Zdog.Ellipse({
    addTo: defaultEyes,
    diameter: 1.5,
    fill: true,
    translate: { x: -2.8 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEye = leftEye.copy({
    translate: { x: 2.8 }
  });

export const happyEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeH = new Zdog.Ellipse({
    addTo: happyEyes,
    diameter: 1.5,
    quarters: 2,
    translate: { x: -2.8 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEyeH = leftEyeH.copy({
    translate: { x: 2.8 }
  });

export const lineEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeL = new Zdog.Shape({
    addTo: lineEyes,
    path: [{ x: -3.5 }, { x: -2 }],
    color: eggplant,
    stroke: 0.6,
    backface: false,
  });

  const rightEyeL = leftEyeL.copy({
    path: [{ x: 3.5 }, { x: 2 }],
  });

export const closeEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 }
  });

  const leftEyeC = new Zdog.Ellipse({
    addTo: closeEyes,
    diameter: 1.5,
    quarters: 2,
    translate: { x: -2.8 },
    rotate: { z: TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: false
  });

  const rightEyeC = leftEyeC.copy({
    translate: { x: 2.8 }
  });

export const winkEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeW = new Zdog.Ellipse({
    addTo: winkEyes,
    diameter: 1.5,
    fill: true,
    translate: { x: -2.8 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEyeW = new Zdog.Shape({
    addTo: winkEyes,
    closed: false,
    path: [{ x: 3.5, y: -0.5 }, { x: 2 }, { x: 3.5, y: 0.5 }],
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

export const strongEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeS = new Zdog.Shape({
      addTo: strongEyes,
      closed: false,
      path: [{ x: -3.5, y: 0.5 }, { x: -2 }, { x: -3.5, y: -0.5 }],
      color: eggplant,
      stroke: 0.5,
      backface: false,
    });

  const rightEyeS = leftEyeS.copy({
      path: [{ x: 3.5, y: 0.5 }, { x: 2 }, { x: 3.5, y: -0.5 }]
  });

export const tiredEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeT = new Zdog.Ellipse({
      addTo: tiredEyes,
      diameter: 1.5,
      quarters: 2,
      closed: true,
      fill: true,
      translate: { x: -2.8 },
      rotate: { z: TAU/4 },
      color: eggplant,
      stroke: 0.5,
      backface: false
    });

  const leftLineEye = new Zdog.Shape({
      addTo: tiredEyes,
      path: [{ x: -4 }, { x: -2 }],
      color: eggplant,
      stroke: 0.5,
    });

  const rightEyeT = leftEyeT.copy({
      translate: { x: 2.8 }
  });

  const rightLineEye = leftLineEye.copy({
      path: [{ x: 4 }, { x: 2 }]
   });

export const angryEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeA = new Zdog.Ellipse({
      addTo: angryEyes,
      diameter: 1.5,
      quarters: 2,
      closed: true,
      fill: true,
      translate: { x: -2.8 },
      rotate: { z: TAU/3 },
      color: eggplant,
      stroke: 0.5,
      backface: false
  });

  const leftLineEyeA = new Zdog.Shape({
      addTo: angryEyes,
      path: [{ x: -3.8, y: -0.6 }, { x: -2, y: 0.3 }],
      color: eggplant,
      stroke: 0.5,
  });

  const rightEyeA = leftEyeA.copy({
      translate: { x: 2.8 },
      rotate: { z: TAU/6 },
  });

  const rightLineEyeA = leftLineEyeA.copy({
      path: [{ x: 3.8, y: -0.6 }, { x: 2, y: 0.3 }],
  });

export const lashesEyes = new Zdog.Group({
  translate: { y: -18, z: 5.5 },
  });

  const leftEyeLa = new Zdog.Ellipse({
    addTo: lashesEyes,
    diameter: 1.5,
    fill: true,
    translate: { x: -2.8 },
    color: eggplant,
    stroke: 0.5,
    backface: false,
  });

  const rightEyeLa = leftEyeLa.copy({
    translate: { x: 2.8 }
  });

  const leftLash = new Zdog.Shape({
    addTo: lashesEyes,
    translate: { x: -2.8 },
    path: [ { x: -1.2, y: -0.4 }, { x: -0.8, y: -0.2 } ],
    color: eggplant,
    stroke: 0.6,
    backface: false,
  });

  const rightLash = leftLash.copy({
    translate: { x: 2.8 },
    path: [ { x: 1.2, y: -0.4 }, { x: 0.8, y: -0.2 } ]
  });