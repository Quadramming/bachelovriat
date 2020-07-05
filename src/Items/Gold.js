import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';

export class Gold extends
	QQ.mixins(Subject.DragAndDropMix, Subject.Sprite)
{
	
	constructor(options) {
		options.image = 'gold';
		super(options);
	}
	
	onDrop(point) {
		c(point);
	}
	
}
