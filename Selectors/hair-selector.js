import * as hairTypes from '../Shapes/hair.js';

export const hairSelect = (type, illo) => {
  Object.values(hairTypes).forEach(hairType => hairType.remove());
  illo.addChild(hairTypes[type + 'Hair']);
};
