import * as QQ from '../qqengine/QQ.js';
import * as matrix from '../qqengine/matrix.js';
import {Point, Size} from '../qqengine/primitives/index.js';
import {Equipment} from './Equipment.js';
import {bodyMap} from './bodyMap.js';

export class Body extends Equipment {
	
	constructor(body) {
		const options = {
			spriteSheet: 'body',
			index: bodyMap.getIndexByName(body)
		};
		super(options);
	}
	
}
