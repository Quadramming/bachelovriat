import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';
import {Item} from '../inventory/Item.js';

export class Gold extends Item {
	
	constructor(options) {
		options.image = 'gold';
		super(options);
	}
	
}
