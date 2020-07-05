import * as Subject from '../qqengine/Subject/index.js';
import {Size, Point} from '../qqengine/primitives/index.js';

export class Slot extends Subject.Sprite {
	
	constructor(options) {
		options.image = 'slot';
		options.selfAdd = true;
		options.size = new Size(2);
		super(options);
		this._store = null;
	}
	
	put(subj) {
		this._store = subj;
		subj.position(new Point(1, 1));
		subj.size(new Size(2));
		this.addSubject(subj);
	}
	
}
