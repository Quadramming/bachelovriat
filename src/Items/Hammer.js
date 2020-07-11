import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';
import {Point} from '../qqengine/primitives/index.js';
import {Item} from '../Inventory/Item.js';

export class Hammer extends Item {
	
	constructor(options = {}) {
		options.image = 'hammer';
		super(options);
	}
	
}
