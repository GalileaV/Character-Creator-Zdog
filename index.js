import { selectMale, selectFemale } from './Selectors/gender-selector.js';
import { eyeSelect } from './Selectors/eye-selector.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const illustration = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 9,
  dragRotate: true,
});

$('.default-eye').addEventListener('click', () => eyeSelect("default", illustration));
$('.happy-eye').addEventListener('click', () => eyeSelect("happy", illustration));
$('.line-eye').addEventListener('click', () => eyeSelect("line", illustration));

$('.male-body').addEventListener('click', () => selectMale(illustration));
$('.female-body').addEventListener('click', () => selectFemale(illustration));

const animate = () => {
  illustration.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();