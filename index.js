import { maleBody } from './Shapes/Gender/male-body.js';
import { femaleBody } from './Shapes/Gender/female-body.js';
import { defaultEyes, happyEyes, lineEyes } from './Shapes/Face/eyes.js';
 
const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 9,
  dragRotate: true,
});

const selectMale = () => {
  femaleBody.remove();
  illo.addChild(maleBody);
  illo.addChild(defaultEyes);
};
document.querySelector('.male-body').addEventListener('click', selectMale);

const selectFemale = () => {
  maleBody.remove();
  illo.addChild(femaleBody);
  illo.addChild(defaultEyes);

};
document.querySelector('.female-body').addEventListener('click', selectFemale);



const animate = () => {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();