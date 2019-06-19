import { selectMale, selectFemale } from './Selectors/gender-selector.js';
import { eyeSelect } from './Selectors/eye-selector.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const illustration = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 9,
  dragRotate: true,
});

$('.default-eyes').addEventListener('click', () => eyeSelect("default", illustration));
$('.happy-eyes').addEventListener('click', () => eyeSelect("happy", illustration));
$('.line-eyes').addEventListener('click', () => eyeSelect("line", illustration));
$('.close-eyes').addEventListener('click', () => eyeSelect("close", illustration));
$('.wink-eyes').addEventListener('click', () => eyeSelect("wink", illustration));
$('.strong-eyes').addEventListener('click', () => eyeSelect("strong", illustration));
$('.tired-eyes').addEventListener('click', () => eyeSelect("tired", illustration));
$('.angry-eyes').addEventListener('click', () => eyeSelect("angry", illustration));
$('.lashes-eyes').addEventListener('click', () => eyeSelect("lashes", illustration));

$('.male-body').addEventListener('click', () => selectMale(illustration));
$('.female-body').addEventListener('click', () => selectFemale(illustration));

const animate = () => {
  illustration.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();