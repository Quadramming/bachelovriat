import * as QQ from '../qqengine/QQ.js';
import * as matrix from '../qqengine/matrix.js';
import {Point, Size} from '../qqengine/primitives/index.js';

const offset = 16;

export class Equipment {
	
	constructor(options) {
		this._spriteSheet = QQ.APP.createSprite(options.spriteSheet);
		this._index = new Point();
		this.setIndex(options.index);
	}
	
	setIndex(index) {
		this._index.copy(index);
	}
	
	put(ctx) {
		QQ.setTransform( ctx, matrix.getMove(new Point(
			-offset * this._index.x(),
			-offset * this._index.y()
		)));
		this._spriteSheet.draw(ctx);
	}
	
}
