import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';

export class Hammer extends
	QQ.mixins(Subject.DragAndDropMix, Subject.Sprite)
{
	
	constructor(options = {}) {
		options.image = 'hammer';
		super(options);
	}
	
}
