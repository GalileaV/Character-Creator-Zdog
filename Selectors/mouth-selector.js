import * as mouthTypes from '../Shapes/Face/mouth.js';

export const mouthSelect = (type, illo) => {
	Object.values(mouthTypes).forEach(mouthType => mouthType.remove());
	illo.addChild(mouthTypes[type + 'Mouth']);
};
