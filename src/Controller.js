import * as QQ from './qqengine/QQ.js';
import * as Sprite from './qqengine/Sprite/index.js';
import * as Subject from './qqengine/Subject/index.js';
import * as matrix from './qqengine/matrix.js';
import * as maths from './qqengine/maths.js';
import {Size, Point} from './qqengine/primitives/index.js';

export class Controller extends Subject.Subject {
	
	constructor(options) {
		const camera = options.seizure.getCamera();
		const cameraSize = camera.getViewSize();
		options.size = new Size(cameraSize.w(), cameraSize.h());
		options.position = new Point(0, 0);
		options.isClickable = true;
		options.selfAdd = true;
		super(options);
		this._fn = options.fn;
	}
	
	onClickDown(worldPoint) {
		this._fn(worldPoint);
		return;
		const local = this.worldToLocal(worldPoint);
		
		const direction = new Point();
		
		const size = this.getSize();
		if ( local.x() > 0 ) {
			direction.x(1);
		} else {
			direction.x(-1);
		}
		let y = (2*local.y()) / size.y();
		if ( y < 0 ) {
			direction.y(-1);
		} else {
			direction.y(1);
		}
		y = Math.abs(y);
		this._fn(direction);
	}
	
	onClickUp(worldPoint) {
		const local = this.worldToLocal(worldPoint);
		//c(local);
	}
	
}
