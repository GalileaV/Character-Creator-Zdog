const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const TAU = Zdog.TAU;
const offWhite = '#FED';
const eggplant = '#636';

//lower-body
const illo = new Zdog.Illustration(illoShape);
const hips = new Zdog.Shape(hipsShape(illo));
const leg = new Zdog.Shape(legShape(hips));
const foot = new Zdog.RoundedRect(footShape(leg));
leg.copyGraph(legShapeCopy);
//upper-body
const chest = new Zdog.Shape(chestShape(hips));
const neck = new Zdog.Shape(neckShape(chest));
const head = new Zdog.Anchor(headShape(neck));
const arm = new Zdog.Shape(armShape(chest));
const hand = new Zdog.Shape(handShape(arm));
arm.copyGraph(armShapeCopy(arm));
//head
const face = new Zdog.Hemisphere(faceShape(head));
const hairless = new Zdog.Hemisphere(hairlessShape(head));
const eye = new Zdog.Ellipse(eyeShape(head));
const ear = new Zdog.Ellipse(earShape(head));
const mouth = new Zdog.Ellipse(mouthShape(head));
eye.copy(eyeShapeCopy);
ear.copy(earShapeCopy(ear));


const manageHair = () => {
  hairless.remove();
  const simpleHair = new Zdog.Hemisphere(simpleHairShape(head)); 
  //topKnot
  const topKnot = new Zdog.Shape(topKnotShape(simpleHair)); 

  const removeHair = () => {
    simpleHair.remove();
    head.addChild(hairless);
  };
  $(".remove-hair").addEventListener('click', removeHair);
};
$(".simple-hair").addEventListener('click', manageHair);


function animate() {
  //illo.rotate.y += 0.012;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();