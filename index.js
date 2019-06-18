import { selectMale, selectFemale } from './gender-selector.js';
 
const illustration = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 9,
  dragRotate: true,
});

document.querySelector('.male-body').addEventListener('click', () => selectMale(illustration));


document.querySelector('.female-body').addEventListener('click', () => selectFemale(illustration));



const animate = () => {
  illustration.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();