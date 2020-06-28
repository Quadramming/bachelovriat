import {Man} from './Man.js';
import {Bag} from '../Bag.js';

export class Enemy extends Man {
	
	constructor(options) {
		super(options);
	}
	
	die() {
		super.die();
		new Bag({position: this.position()});
	}
}
