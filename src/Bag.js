import * as Subject from './qqengine/Subject/index.js';
import * as QQ from './qqengine/QQ.js';
import * as CONST from './qqengine/CONST/index.js';
import {Size, Point} from './qqengine/primitives/index.js';
import {Hammer} from './Items/Hammer.js';

export class Bag extends Subject.Solid {
	
	constructor(options) {
		options.image = 'bag';
		options.size = new Size(0.5, 0.5);
		options.solid = {
			position: new Point(options.position.x(), options.position.y() + 0.4),
			size: new Size(0, 0),
			type: CONST.SOLID.SLIM,
			anchor: new Point(0.5, 1)
		};
		super(options);
		QQ.APP.getActiveSz().addToForeground(this);
		this._inventory = QQ.arrayOfNull(12);
		this._inventory[0] = new Hammer();
	}
	
	item(i, item) {
		if ( item !== undefined ) {
			this._inventory[i] = item;
		}
		return this._inventory[i];
	}
	
}
