const TAU = Zdog.TAU;

export const maleBody = new Zdog.Group({
});

  const HeadGroup = new Zdog.Group({
    addTo: maleBody,
    translate: { y: -11.5 }
  });

  const neck = new Zdog.Shape({
    addTo: HeadGroup,
    path: [ { y: 0 }, { y: -0.8 } ],
    stroke: 3,
    color: 'white'
  })

  const head = new Zdog.Hemisphere({
    addTo: neck,
    diameter: 13,
    translate: { y: -7.5 },
    rotate: { x: TAU/8 * 3, y: TAU/2 },
    stroke: 0.5,
    color: 'white',
  });

  const LowerBodyGroup = new Zdog.Group({
    addTo: maleBody,
    translate: { y: 3, z: -0.5 }
  });

  const hips = new Zdog.Shape({
    addTo: LowerBodyGroup,
    path: [ { x: 1 }, { x: -1 } ],
    stroke: 9,
  });

  const thigh = new Zdog.Shape({
    addTo: hips,
    path: [ { y: 3 }, { y: 10 } ],
    translate: { x: -3.3, z: -0.2 },
    stroke: 5,
    color: 'white'
  });

  const thigh2 = new Zdog.Shape({
    addTo: hips,
    path: [ { y: 3 }, { y: 10 } ],
    translate: { x: 3.3, z: -0.2 },
    stroke: 5,
    color: 'white'
  });

  const leg = new Zdog.Shape({
    addTo: thigh,
    path: [ { y: 10 }, { y: 15 } ],
    stroke: 5,
    color: 'white'
  });

  const leg2 = new Zdog.Shape({
    addTo: thigh2,
    path: [ { y: 10 }, { y: 15 } ],
    stroke: 5,
    color: 'white'
  });

  const foot = new Zdog.RoundedRect({
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

  const foot2 = new Zdog.RoundedRect({
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

  const UpperBodyGroup = new Zdog.Group({
    addTo: maleBody,
  });

  const chest = new Zdog.Rect({
    addTo: UpperBodyGroup,
    width: 3.5,
    height: 5.5,
    translate: { y: -5.5 },
    stroke: 6,
    color: 'white'
  });

  const armUpL = new Zdog.Shape({
    addTo: chest,
    path: [ { y: 0 }, { y: 3.5 } ],
    translate: { x: -5, y: -2.5 },
    stroke: 4,
    rotate: { z: TAU/10 },
    color: 'white'
  });

  const armUpR = new Zdog.Shape({
    addTo: chest,
    path: [ { y: 0 }, { y: 3.5 } ],
    translate: { x: 5, y: -2.5 },
    stroke: 4,
    rotate: { z: -TAU/10 },
    color: 'white'
  });

  const armDownL = new Zdog.Shape({
    addTo: armUpL,
    path: [ { y: 3.5 }, { y: 10 } ],
    stroke: 4,
    color: 'white',
  });

  const armDownR = new Zdog.Shape({
    addTo: armUpR,
    path: [ { y: 3.5 }, { y: 10 } ],
    stroke: 4,
    color: 'white',
  });

  const handLeft = new Zdog.Shape({
    addTo: armDownL,
    translate: { y: 12 },
    stroke: 5,
    color: 'white',
  });

  const handRight = new Zdog.Shape({
    addTo: armDownR,
    translate: { y: 12 },
    stroke: 5,
    color: 'white',
  });
