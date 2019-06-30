import * as lowerTypes from '../Shapes/Clothes/lower-clothes.js';
import * as upperTypes from '../Shapes/Clothes/upper-clothes.js';
import * as shoesTypes from '../Shapes/Clothes/shoes.js';
import { LowerBodyFemale, UpperBodyFemale, feetFemale } from '../Shapes/Gender/female-body.js';
import { LowerBodyMale, UpperBodyMale, feetMale } from '../Shapes/Gender/male-body.js';

export const lowerClothesSelect = (type, illo) => {
	if ((LowerBodyFemale.visible === true, LowerBodyMale.visible === true)) {
		LowerBodyFemale.visible = false;
		LowerBodyMale.visible = false;
		Object.values(lowerTypes).forEach(lowerType => lowerType.remove());
		illo.addChild(lowerTypes[type]);
	} else {
		Object.values(lowerTypes).forEach(lowerType => lowerType.remove());
		LowerBodyFemale.visible = true;
		LowerBodyMale.visible = true;
	}
};

export const upperClothesSelect = (type, illo) => {
	if ((UpperBodyFemale.visible === true, UpperBodyMale.visible === true)) {
	UpperBodyFemale.visible = false;
	UpperBodyMale.visible = false;
	Object.values(upperTypes).forEach(upperType => upperType.remove());
	illo.addChild(upperTypes[type]);
} else {
	Object.values(upperTypes).forEach(upperType => upperType.remove());
	UpperBodyFemale.visible = true;
	UpperBodyMale.visible = true;
}

};

export const ShoesSelect = (type, illo) => {
	if ((feetFemale.visible === true, feetMale.visible === true)) {
	feetFemale.visible = false;
	feetMale.visible = false;
	Object.values(shoesTypes).forEach(shoeType => shoeType.remove());
	illo.addChild(shoesTypes[type]);
} else {
	Object.values(shoesTypes).forEach(shoeType => shoeType.remove());
	feetFemale.visible = true;
	feetMale.visible = true;
}
};
