import * as Subject from './qqengine/Subject/index.js';
import * as Actions from './qqengine/Actions/index.js';
import {Point, Size} from './qqengine/primitives/index.js';
import * as maths from './qqengine/maths.js';

export class Bones extends Subject.Actionable {
	
	constructor(options) {
		options.size = new Size(0, 0);
		super(options);
		this._bonesAmount = maths.rand(1, 3);
		for ( let i = 0; i < this._bonesAmount; ++i ) {
			this.addSubject(Subject.make({
				image: 'bone',
				size: new Size(0.7, 0.7),
				angle: maths.rand(-3.14, 3.14, false),
				position: new Point(
					maths.rand(-0.2, 0.2),
					maths.rand(-0.2, 0.2)
				)
			}));
		}
		this.addSubject(Subject.make({
			image: 'skull',
			size: new Size(0.7, 0.7),
			angle: maths.rand(-3.14, 3.14, false),
			position: new Point(
				maths.rand(-0.2, 0.2),
				maths.rand(-0.2, 0.2)
			)
		}));
		
		this.drop();
	}
	
	drop() {
		const thisPos = this.position();
		this.setAction(
			new Actions.MoveTo({
				subj: this,
				to: new Point(thisPos.x(), thisPos.y() + 0.5),
				duration: 0.15,
				onEnd: () => {
					this.wait();
				}
			})
		);
	}
	
	wait() {
		this.setAction(
			new Actions.WaitFor({
				duration: 5,
				onEnd: () => {this.disappear();}
			})
		);
	}
	
	disappear() {
		this.setAction(
			new Actions.Disappear({
				duration: 1,
				onEnd: () => this.destructor()
			})
		);
	}
	
	setAlpha(a) {
		this.forAllSubjects((subj) => {
			subj.alpha(a);
		});
	}
	
};
