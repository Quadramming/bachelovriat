import * as QQ from '../qqengine/QQ.js';
import * as Subject from '../qqengine/Subject/index.js';
import * as Text from '../qqengine/Text/index.js';
import * as Actions from '../qqengine/Actions/index.js';
import * as CONST from '../qqengine/CONST/index.js';
import {Point, Size} from '../qqengine/primitives/index.js';
import {Look} from './Look.js';
import {Bones} from '../Bones.js';

export class Man extends
	QQ.mixins(Subject.SolidMix, Subject.ActionableMix, Look)
{
	
	constructor(options = {}) {
		options.solid = {
			size: new Size(0.75, 0.25),
			offset: new Point(0, 0.5),
			anchor: new Point(0.5, 1),
			weight: options.weight,
			type: CONST.SOLID.DYNAMIC,
			getBasis: () => this.position()
		};
		super(options);
		this._alive = true;
		this._speed = QQ.useDefault(options.speed, 2);
		this._inventory = null;
		
		this._hitTargets = [];
		this._attackCharge = 0;
		this._health = 2;
	}
	
	tick(delta) {
		super.tick(delta);
		this.cleanHitTargets();
		this._attackCharge += delta;
		if ( this._attackCharge > 1 ) {
			this._attackCharge = 0;
			this.hit();
		}
		if ( this._health <= 0 ) {
			this.die();
		}
	}
	
	cleanHitTargets() {
		this._hitTargets = this._hitTargets.filter( target =>
			target.isAlive()
		);
	}
	
	addHitTarget(subj) {
		this._hitTargets.push(subj);
	}
	
	hit() {
		const target = this._hitTargets[0];
		if ( target ) {
			target.getHit();
		}
	}
	
	getHit() {
		this._health -= 1;
		Text.Bubble.make({
			text: '-1',
			position: this.position(),
			size: new Size(0.5, 0.5),
			world: this.getWorld()
		});
	}
	
	goTo(offset) {
		const target = this.position().add(offset);
		this.setAction(new Actions.WalkTo(target));
	}
	
	go(direction) {
		this.setAction(new Actions.Walk(direction));
	}
	
	isAlive() {
		return this._alive;
	}
	
	die() {
		this._alive = false;
		
		this.getWorld()._seizure._background.addSubject(new Bones({
			position: this.position()
		}));
		this.delete();
	}
	
	/*
	hitted(worldPoint) {
		const local = this.worldToLocalPoint(worldPoint);
		const percent = new Point(
			(this._size.x()*this._anchor.x()+local.x())/this._size.x(),
			(this._size.y()*this._anchor.y()+local.y())/this._size.y()
		);
		const picData = this.getPicData();
		const imgSize = new Point(picData.width, picData.height);
		const imgPoint = new Point(
			Math.floor(imgSize.w()*percent.x()),
			Math.floor(imgSize.h()*percent.y())
		);
		const pixel = QQ.getPixel(picData.data, imgSize, imgPoint);
		if ( pixel.a === 0 ) {
			// Miss sprite
			return false;
		}
		if ( this._shield ) {
			this.removeShield();
		} else {
			this.die();
		}
		return true;
	}
	*/
	
	getSpeed() {
		return this._speed;
	}
	
}
