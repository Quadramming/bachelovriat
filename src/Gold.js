import * as Subject from './qqengine/Subject/index.js';
import {Size, Point} from './qqengine/primitives/index.js';
import * as CONST from './qqengine/CONST/index.js';

export class Gold extends Subject.Solid {
	
	constructor(options) {
		options.image = 'gold';
		options.size = new Size(1, 1);
		options.solid = {
			position: new Point(options.position.x(), options.position.y() + 0.4),
			size: new Size(0, 0),
			type: CONST.SOLID.SLIM,
			anchor: new Point(0.5, 1)
		};
		super(options);
	}
	
}
