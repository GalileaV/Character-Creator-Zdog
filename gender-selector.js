import { maleBody } from './Shapes/Gender/male-body.js';
import { femaleBody } from './Shapes/Gender/female-body.js';
import { defaultEyes, happyEyes, lineEyes } from './Shapes/Face/eyes.js';

export const selectMale = (illo) => {
  femaleBody.remove();
  illo.addChild(maleBody);
  illo.addChild(defaultEyes);
};

export const selectFemale = (illo) => {
  maleBody.remove();
  illo.addChild(femaleBody);
  illo.addChild(defaultEyes);
};