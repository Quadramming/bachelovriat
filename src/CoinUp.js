import * as QQ from './qqengine/QQ.js';
import * as Subject from './qqengine/Subject/index.js';
import * as Actions from './qqengine/Actions/index.js';
import {Point, Size} from './qqengine/primitives/index.js';

export class CoinUp extends
	QQ.mixins(Subject.ActionableMix, Subject.Subject)
{
	
	constructor(options) {
		options.z = 1;
		options.size = new Size(0, 0);
		super(options);
		this._coin = Subject.make({
			image: 'gold',
			size: new Size(1, 1)
		});
		this.addSubject(this._coin);
		this.up();
	}
	
	up() {
		const thisPos = this.getPosition();
		this.setAction(
			new Actions.MoveTo({
				subj: this,
				to: new Point(thisPos.x(), thisPos.y() - 0.5),
				duration: 1,
				onEnd: () => {this.disappear();}
			})
		);
	}
	
	disappear() {
		this.setAction(
			new Actions.Disappear({
				duration: 0.5,
				onEnd: () => {this.deleteMe();}
			})
		);
	}
	
	setAlpha(a) {
		this._coin.alpha(a);
	}
	
}
