import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';
import {Point} from '../qqengine/primitives/index.js';
import {Slot} from './Slot.js';

export class Item extends
	QQ.mixins(Subject.DragAndDropMix, Subject.Sprite)
{
	
	constructor(options) {
		super(options);
	}
	
	onClickDown(point, pointer) {
		super.onClickDown(point, pointer);
		this.parent().z(1);
	}
	
	onDrop(point) {
		const mySlot = this.parent();
		this.parent().z(0);
		let slot = this.getWorld().getSubjects((subj) => {
			return subj instanceof Slot && subj.isHit(point);
		});
		if ( slot.length > 0 && slot[0] != mySlot ) {
			mySlot.swap(slot.pop());
		} else {
			this.position(Point.ZERO());
		}
	}
}
