import * as QQ from '../qqengine/QQ.js';
import * as matrix from '../qqengine/matrix.js';
import {Point, Size} from '../qqengine/primitives/index.js';
import {Equipment} from './Equipment.js';
import {chestMap} from './chestMap.js';

export class Chest extends Equipment {
	
	constructor() {
		const options = {
			spriteSheet: 'chest',
			index: chestMap.getIndexByName('main')
		};
		super(options);
	}
	
}
