import { selectMale, selectFemale } from './gender-selector.js';
// import { defaultEyes, happyEyes, lineEyes } from './Shapes/Face/eyes.js';
import * as eyeTypes from './Shapes/Face/eyes.js';
 
const illustration = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 9,
  dragRotate: true,
});

// const eyes = {
//   "default": defaultEyes,
//   "happy": happyEyes,
//   "line": lineEyes
// };

const eyeSelect = (type, illo) => {
  Object.values(eyeTypes).forEach(eyeType => eyeType.remove());
  // computed property
  illo.addChild(eyeTypes[type + "Eyes"]);
};

document.querySelector('.default-eyes').addEventListener('click', () => eyeSelect("default", illustration));
document.querySelector('.happy-eyes').addEventListener('click', () => eyeSelect("happy", illustration));
document.querySelector('.line-eyes').addEventListener('click', () => eyeSelect("line", illustration));

document.querySelector('.male-body').addEventListener('click', () => selectMale(illustration));
document.querySelector('.female-body').addEventListener('click', () => selectFemale(illustration));

const animate = () => {
  illustration.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();