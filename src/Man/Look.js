import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';
import {Point, Size} from '../qqengine/primitives/index.js';
import {Body} from './Body.js';
import {Chest} from './Chest.js';
import {Pants} from './Pants.js';

export class Look extends Subject.Sprite {
	
	constructor(options) {
		super(options);
		this._body = new Body('orc');
		this._chest = new Chest();
		this._pants = new Pants();
		this._redraw();
	}
	
	_redraw() {
		const memoryImage = QQ.makeCanvas( new Size(16, 16) );
		this._body.put(memoryImage.ctx);
		this._chest.put(memoryImage.ctx);
		this._pants.put(memoryImage.ctx);
		this.setSpriteImage(memoryImage.cvs);
	}
	
}
