import * as itemTypes from '../Shapes/items.js';

export const itemSelect = (type, illo) => {
  illo.addChild(itemTypes[type]);
};
