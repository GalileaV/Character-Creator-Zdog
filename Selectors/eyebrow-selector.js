import * as eyebrowTypes from '../Shapes/Face/eyebrows.js';

export const eyebrowSelect = (type, illo) => {
	Object.values(eyebrowTypes).forEach(eyebrowType => eyebrowType.remove());
	illo.addChild(eyebrowTypes[type + 'Eyebrow']);
};