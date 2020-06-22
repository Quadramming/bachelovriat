import * as Subject from './qqengine/Subject/index.js';
import * as CONST from './qqengine/CONST/index.js';
import {Man} from './Man/Man.js';
import {Player} from './Man/Player.js';
import {Enemy} from './Man/Enemy.js';
import {Gold} from './Gold.js';
import {Point, Size} from './qqengine/primitives/index.js';

const tiles = {
	w: 'wall',
	f: 'floor',
	p: 'player',
	e: 'enemy',
	g: 'gold'
}

export class Map {
	
	constructor() {
		this._map = [
			'wwwwwww',
			'wpfmffww',
			'wwwffffw',
			'wwwwfrfww',
			'wwwwegfmw',
			'wwwwwwwww',
		];
		this._foreground = null;
		this._background = null;
	}
	
	fill(background, foreground) {
		this._foreground = foreground;
		this._background = background;
		let player = null;
		const length = this._map.length;
		for ( let y = 0; y < length; ++y ) {
			const line = this._map[y];
			for ( let x = line.length-1; x >= 0; --x ) {
				if ( line[x] === 'w' ) {
					this.addWall(x, y);
				} else if ( line[x] === 'p' ) {
					player = this.addPlayer(x, y);
					this.addFloor(x, y);
				} else if ( line[x] === 'f' ) {
					this.addFloor(x, y);
				} else if ( line[x] === 'e' ) {
					this.addEnemy(x, y);
					this.addFloor(x, y);
				} else if ( line[x] === 'g' ) {
					this.addGold(x, y);
					this.addFloor(x, y);
				} else if ( line[x] === 'r' ) {
					this.addRock(x, y);
					this.addFloor(x, y);
				} else if ( line[x] === 'm' ) {
					this.addMushroom(x, y);
					this.addFloor(x, y);
				}
			}
		}
		return player;
	}
	
	addWall(x, y) {
		const wall = Subject.make({
			isActor: false,
			image: 'wall',
			position: new Point(x, y),
			size: new Size(1, 1),
			solid: {
				getBasis: () => wall.getPosition(),
				offset: new Point(0, -0.5),
				size: new Size(1, 1),
				anchor: new Point(0.5, 0)
			}
		});
		this._foreground.addSubject(wall);
	}
	
	addMushroom(x, y) {
		this._foreground.addSubject(Subject.make({
			image: 'mushroom',
			position: new Point(x, y),
			size: new Point(1, 1),
			solid: {
				position: new Point(x, y+0.4),
				size: new Size(0, 0),
				type: CONST.SOLID.SLIM
			}
		}));
	}
	
	addRock(x, y) {
		this._foreground.addSubject(Subject.make({
			image: 'rock',
			position: new Point(x, y),
			size: new Size(1, 2),
			anchor: new Point(0.5, 0.9),
			solid: {
				size: new Size(0.5, 0.75),
				position: new Point(x, y),
				anchor: new Point(0.5, 1),
			}
		}));
	}
	
	addFloor(x, y) {
		this._background.addSubject(Subject.make({
			image: 'floor',
			position: new Point(x, y),
			size: new Size(1, 1),
		}));
	}
	
	addPlayer(x, y) {
		const player = new Player({
			position: new Point(x, y)
		});
		this._foreground.addSubject(player);
		return player;
	}
	
	addEnemy(x, y) {
		const enemy = new Enemy({
			position: new Point(x, y)
		});
		this._foreground.addSubject(enemy);
	}
	
	addGold(x, y) {
		this._foreground.addSubject(new Gold({
			position: new Point(x, y),
		}));
	}
	
}
