import { illoShape, hipsShape, legShape, footShape, legShapeCopy, footShapeCopy } from "./Shapes/lower-body.js";
import { chestShape, neckShape, headShape, armShape, handShape, armShapeCopy } from "./Shapes/upper-body.js";
import { hairlessShape, faceShape, eyeShape, eyeShapeCopy, earShape, earShapeCopy, mouthShape } from "./Shapes/head.js";
import { simpleHairShape, topKnotShape, knotShape, knotShapeCopy } from "./Shapes/hair.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const TAU = Zdog.TAU;
const offWhite = '#FED';
const eggplant = '#636';
const blue = '#4A82E4';

//lower-body
const illo = new Zdog.Illustration(illoShape);
const hips = new Zdog.Shape(hipsShape(illo));
const leg = new Zdog.Shape(legShape(hips));
const foot = new Zdog.RoundedRect(footShape(TAU, leg));
leg.copy(legShapeCopy(hips));
foot.copy(footShapeCopy(leg));
//upper-body
const chest = new Zdog.Shape(chestShape(hips));
const neck = new Zdog.Shape(neckShape(chest));
const head = new Zdog.Anchor(headShape(neck));
const arm = new Zdog.Shape(armShape(TAU, chest));
const hand = new Zdog.Shape(handShape(arm));
arm.copyGraph(armShapeCopy(TAU, arm));
//head
const face = new Zdog.Hemisphere(faceShape(TAU, head));
const hairless = new Zdog.Hemisphere(hairlessShape(TAU, head));
const eye = new Zdog.Ellipse(eyeShape(eggplant, TAU, head));
const ear = new Zdog.Ellipse(earShape(offWhite, head));
const mouth = new Zdog.Ellipse(mouthShape(eggplant, TAU, head));
eye.copy(eyeShapeCopy);
ear.copy(earShapeCopy(TAU, ear));

const addAndRemoveSword = () => {
  var sword = new Zdog.Group({
    addTo: illo,
    translate: { x: -16, y: -11, z: 9 },
    rotate: { x: -TAU/30,  y: -TAU/8, z: -TAU/10}
  });

  const mango = new Zdog.Shape({
    addTo: sword,
    path: [{x: -4, y: 11}, {x: 4, y: 11}],
    stroke: 2,
    color: '#9197A1'
  });

  new Zdog.Shape({
    addTo: mango,
    path: [{y: 17}, {y: 11}],
    stroke: 2,
    color: '#9197A1'
  });

  new Zdog.Shape({
    addTo: mango,
    path: [ // triangle
      { x:   0.2, y: -18 },
      { x:  3, y:  -14 },
      { x: 2, y:  10 },
      { x: 0.2, y:  10 },
      { x: 0.2, y:  -18 },
      //{ x: -0, y:  -90 },
    ],
    fill:true,
    closed: false,
    stroke: 1,
    color: '#E0E4EB'
  });
  new Zdog.Shape({
    addTo: mango,
    path: [ // triangle
      { x:   -0.4, y: -18 },
      { x:  -3, y:  -14 },
      { x: -2, y:  10 },
      { x: -0.4, y:  10 },
      { x: -0.4, y:  -18 },
      //{ x: -0, y:  -90 },
    ],
    fill:true,
    closed: false,
    stroke: 1,
    color: '#EDEFF3'
  });

  const removeSword = () => {
    sword.remove();
  }
$(".remove-sword").addEventListener('click', removeSword);
};
$(".add-sword").addEventListener('click', addAndRemoveSword);

const addAndRemoveSimpleHair = () => {
  hairless.remove();
  const simpleHair = new Zdog.Hemisphere(simpleHairShape(TAU, head)); 
  const topKnot = new Zdog.Shape(topKnotShape(simpleHair)); 

  const removeHair = () => {
    simpleHair.remove();
    head.addChild(hairless);
  };
  $(".remove-hair").addEventListener('click', removeHair);
};
$(".simple-hair").addEventListener('click', addAndRemoveSimpleHair);


const addAndRemoveKnots = () => {
  hairless.remove();
  const simpleHair = new Zdog.Hemisphere(simpleHairShape(TAU, head)); 
  const knot = new Zdog.Shape(knotShape(simpleHair));
  knot.copy(knotShapeCopy(simpleHair));

  const removeHair = () => {
    simpleHair.remove();
    head.addChild(hairless);
  };
  $(".remove-hair").addEventListener('click', removeHair);
};
$(".knots").addEventListener('click', addAndRemoveKnots);

function animate() {
  //illo.rotate.y += 0.012;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();