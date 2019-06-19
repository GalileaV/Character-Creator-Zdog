import * as eyeTypes from '../Shapes/Face/eyes.js';

export const eyeSelect = (type, illo) => {
  Object.values(eyeTypes).forEach(eyeType => eyeType.remove());
  illo.addChild(eyeTypes[type + "Eye"]);
};