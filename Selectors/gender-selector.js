import { maleBody } from '../Shapes/Gender/male-body.js';
import { femaleBody } from '../Shapes/Gender/female-body.js';
import { defaultHair } from '../Shapes/hair.js';

export const selectMale = illo => {
  femaleBody.remove();
  illo.addChild(maleBody);
  illo.addChild(defaultHair);
};

export const selectFemale = illo => {
  maleBody.remove();
  illo.addChild(femaleBody);
  illo.addChild(defaultHair);
};
