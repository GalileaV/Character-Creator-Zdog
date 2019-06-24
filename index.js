import { selectMale, selectFemale } from './Selectors/gender-selector.js';
import { earSelect } from './Selectors/ear-selector.js';
import { eyebrowSelect } from './Selectors/eyebrow-selector.js';
import { eyeSelect } from './Selectors/eye-selector.js';
import { mouthSelect } from './Selectors/mouth-selector.js';
import { hairSelect } from './Selectors/hair-selector.js';
import { itemSelect } from './Selectors/item-selector.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const illustration = new Zdog.Illustration({
  element: '.zdog-svg',
  translate: { y: 20 },
  dragRotate: true,
  resize: true,
});

$$('.ears').forEach(element =>
  element.addEventListener('click', () => earSelect(element.dataset.earsType, illustration)),
);
$$('.eyebrows').forEach(element =>
  element.addEventListener('click', () =>
    eyebrowSelect(element.dataset.eyebrowsType, illustration),
  ),
);
$$('.eyes').forEach(element =>
  element.addEventListener('click', () => eyeSelect(element.dataset.eyeType, illustration)),
);
$$('.mouth').forEach(element =>
  element.addEventListener('click', () => mouthSelect(element.dataset.mouthType, illustration)),
);
$$('.hair').forEach(element =>
  element.addEventListener('click', () => hairSelect(element.dataset.hairType, illustration)),
);
$$('.item').forEach(element =>
  element.addEventListener('click', () => itemSelect(element.dataset.itemType, illustration)),
);
//gender
$('.male-body').addEventListener('click', () => selectMale(illustration));
$('.female-body').addEventListener('click', () => selectFemale(illustration));

const animate = () => {
  illustration.updateRenderGraph();
  requestAnimationFrame(animate);
};

animate();
