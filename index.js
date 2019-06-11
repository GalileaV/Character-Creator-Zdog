const TAU = Zdog.TAU;
const offWhite = '#FED';
const eggplant = '#636';

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 7,
  dragRotate: true,
});


const hips = new Zdog.Shape({
  addTo: illo,
  path: [{ x: 2.3}, {x: -2.3}],
  stroke: 7,
});

const chest = new Zdog.Shape({
  addTo: hips,
  path: [{y: 2}, {y: -1}],
  translate: {y: -8},
  stroke: 11,
  color: '#879aab'
});

const neck = new Zdog.Shape({
  addTo: chest,
  path: [{y: 0.8}, {y: -0.8}],
  translate: {y: -7.5},
  stroke: 3,
  color: 'white'
})


const head = new Zdog.Anchor({
    addTo: neck,
    translate: { y: -5.5},
    //rotate: { x: TAU/8 }
});

const withoutHair = new Zdog.Hemisphere({
  addTo:head,
  diameter: 13,
  color: 'white',
  stroke: 0.5,
  rotate: { x: TAU/8 * 3, y: 0 },
});


const addHair = () => {
  withoutHair.remove();

  const hair = new Zdog.Hemisphere({
  addTo: head,
  diameter: 15,
  color: '#4b2c20',
  translate: { y: 0, z:-0.3},
  stroke: 0.5,
  rotate: { x: TAU/8 * 3, y: 0 }
  });

  const topKnot = new Zdog.Shape({
    addTo: hair,
    stroke: 5,
    color: '#4b2c20',
    translate: { z: 9}
  })

  const removeHair = () => {
    hair.remove();
    head.addChild(withoutHair);
  };
  document.querySelector(".remove-hair").addEventListener('click', removeHair);

};

document.querySelector(".hair").addEventListener('click', addHair);




  const face = new Zdog.Hemisphere({
    addTo: head,
    diameter: 13,
    color: 'white',
    //backface: '#4b2c20',
    stroke: 0.5,
    //translate: { y: -0.95 },
    rotate: { x: TAU/8 * 3, y: TAU/2 },
  });

const eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 1.5,
  //quarters: 4,
  closed: true,
  fill: true,
  translate: { x: -2.8, y: 1, z: 5.5 },
  rotate: { z: -TAU/4 },
  color: eggplant,
  stroke: 0.5,
  backface: false,
});
eye.copy({
  translate: { x: 2.8, y: 1, z: 4.5 },
});

const ear = new Zdog.Ellipse ({
  addTo: head,
  diameter: 2,
  stroke: 1.3,
  quarters: 2,
  fill: true,
  translate: { x: 5.8, y: 0.8, z: -0.3 },
  color: offWhite,
});
ear.copy({
  rotate: { y: TAU/2},
  translate: { x: -5.8, y: 0.8, z: -0.3 }
});

//mouth
new Zdog.Ellipse({
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

const leg = new Zdog.Shape({
  addTo: hips,
  path: [{y: 0}, {y: 15}],
  //rotate: { x: -TAU/9 },
  translate: {x: -3.3, z: -0.2},
  stroke: 5
});

const foot = new Zdog.RoundedRect({
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

leg.copyGraph({
  translate: { x: 3.3, z: -0.2 },
  //rotate: { x: TAU/8 },
});

const arm = new Zdog.Shape({
  addTo: chest,
  path: [ { y: 0 }, { y: 8 } ],
  translate: { x: -5, y: -2 },
  rotate: { z: TAU/10},
  color: '#788da0',
  stroke: 4,
});
new Zdog.Shape({
  addTo: arm,
  translate: { y: 10 },
  stroke: 5,
  color: 'white',
});

arm.copyGraph({
  translate: { x: 5, y: -2},
  rotate: { z: -TAU/10}
});

function animate() {
  //illo.rotate.y += 0.012;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();