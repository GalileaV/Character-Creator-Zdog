import { maleBody } from '../Shapes/Gender/male-body.js';
import { femaleBody } from '../Shapes/Gender/female-body.js';

export const selectMale = (illo) => {
  femaleBody.remove();
  illo.addChild(maleBody);
};

export const selectFemale = (illo) => {
  maleBody.remove();
  illo.addChild(femaleBody);
};