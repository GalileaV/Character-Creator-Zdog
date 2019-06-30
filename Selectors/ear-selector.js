import * as earTypes from '../Shapes/Face/ears.js';

export const earSelect = (type, illo) => {
  Object.values(earTypes).forEach(earType => earType.remove());
  illo.addChild(earTypes[type + 'Ear']);
};
