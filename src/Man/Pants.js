import * as QQ from '../qqengine/QQ.js';
import * as matrix from '../qqengine/matrix.js';
import {Point, Size} from '../qqengine/primitives/index.js';
import {Equipment} from './Equipment.js';
import {pantsMap} from './pantsMap.js';

export class Pants extends Equipment {
	
	constructor() {
		const options = {
			spriteSheet: 'pants',
			index: pantsMap.getIndexByName('main')
		};
		super(options);
	}
	
}
