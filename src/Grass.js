import * as QQ from './qqengine/QQ.js';
import * as Sprite from './qqengine/Sprite/index.js';
import * as Subject from './qqengine/Subject/index.js';
import * as matrix from './qqengine/matrix.js';
import * as maths from './qqengine/maths.js';
import {Size, Point} from './qqengine/primitives/index.js';

const tiles = [
	'grass1',
	'grass2',
	'grass3'
];

export class Grass extends Subject.Sprite {
	
	constructor(options) {
		super(options);
		this._camera = options.seizure.getCamera();
		this._tiles = [];
		for ( let tile of tiles ) {
			this._tiles.push( QQ.APP.createSprite(tile) );
		}
		this.reset();
		QQ.APP.addOnResize( () => this.reset() );
	}
	
	reset() {
		const tilePxSize = this._tiles[0].size().w();
		const cameraViewSize = this._camera.getViewSize();
		const w = Math.ceil(cameraViewSize.w() * 1.5);
		const h = Math.ceil(cameraViewSize.h() * 1.5);
		const memoryImage = QQ.makeCanvas( new Size(w*tilePxSize, h*tilePxSize) );
		
		for ( let x = 0; x < w; ++x ) {
			for ( let y = 0; y < h; ++y ) {
				QQ.setTransform(
					memoryImage.ctx,
					matrix.getMove(new Point(tilePxSize*x, tilePxSize*y))
				);
				const tileIndex = maths.rand(0, tiles.length-1);
				this._tiles[tileIndex].draw( memoryImage.ctx );
			}
		}
		
		this.setSpriteImage(memoryImage.cvs);
		this.setSize(new Size(w, h));
	}
	
}
