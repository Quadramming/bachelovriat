import * as Subject from '../qqengine/Subject/index.js';
import {Size, Point} from '../qqengine/primitives/index.js';

export class Slot extends Subject.Sprite {
	
	constructor(options) {
		options.selfAdd = true;
		options.size = new Size(2);
		options.image = 'slot';
		super(options);
		this._store = null;
	}
	
	put(subj) {
		this._store = subj;
		if ( subj ) {
			subj.size(new Size(2));
			subj.position(new Point(0, 0));
			this.addSubject(subj);
		}
	}
	
	isEmpty() {
		return this._store == null;
	}
	
	item(item) {
		return this._store;
	}
	
	stealStore() {
		if ( this.isEmpty() ) {
			return null;
		}
		const subj = this.stealSubject( this._store );
		this._store = null;
		return subj;
	}
	
	swap(other) {
		const my = this.stealStore();
		const them = other.stealStore();
		this.put(them);
		other.put(my);
	}
	
}
