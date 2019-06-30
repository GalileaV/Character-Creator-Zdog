import { openSection } from './Selectors/tab-selector.js';
import { selectMale, selectFemale } from './Selectors/gender-selector.js';
import { earSelect } from './Selectors/ear-selector.js';
import { eyebrowSelect } from './Selectors/eyebrow-selector.js';
import { eyeSelect } from './Selectors/eye-selector.js';
import { mouthSelect } from './Selectors/mouth-selector.js';
import { hairSelect } from './Selectors/hair-selector.js';
import {
  lowerClothesSelect,
  upperClothesSelect,
  ShoesSelect,
} from './Selectors/clothes-selector.js';
import { itemSelect } from './Selectors/item-selector.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let isSpinning = false;
const illustration = new Zdog.Illustration({
  element: '.zdog-svg',
  translate: { y: 20 },
  dragRotate: true,
  resize: true,
});

const rotate = () => {
  if (isSpinning === false) {
    isSpinning = true;
  } else {
    isSpinning = false;
  }
};

$('.rotate').addEventListener('click', rotate);
// $$('.tablinks').forEach(element =>
//   element.addEventListener('click', () => openSection(event, element.dataset.sectionType)),
// );

$('.eyes-tab').addEventListener('click', () => openSection(event, 'eyes'));
$('.mouth-tab').addEventListener('click', () => openSection(event, 'mouth'));
$('.eyebrows-tab').addEventListener('click', () => openSection(event, 'eyebrows'));
$('.ears-tab').addEventListener('click', () => openSection(event, 'ears'));
$('.hair-tab').addEventListener('click', () => openSection(event, 'hair'));
$('.clothes-tab').addEventListener('click', () => openSection(event, 'clothes'));
$('.items-tab').addEventListener('click', () => openSection(event, 'items'));

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
$$('.upper-clothes').forEach(element =>
  element.addEventListener('click', () =>
    upperClothesSelect(element.dataset.clotheType, illustration),
  ),
);
$$('.lower-clothes').forEach(element =>
  element.addEventListener('click', () =>
    lowerClothesSelect(element.dataset.clotheType, illustration),
  ),
);
$$('.shoes').forEach(element =>
  element.addEventListener('click', () => ShoesSelect(element.dataset.clotheType, illustration)),
);
$$('.item').forEach(element =>
  element.addEventListener('click', () => itemSelect(element.dataset.itemType, illustration)),
);
//gender
$('.male-body').addEventListener('click', () => selectMale(illustration));
$('.female-body').addEventListener('click', () => selectFemale(illustration));

const animate = () => {
  illustration.updateRenderGraph();
  illustration.rotate.y += isSpinning ? 0.012 : 0;
  requestAnimationFrame(animate);
};

animate();
