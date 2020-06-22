import * as Subject from './qqengine/Subject/index.js';
import {Point, Size} from './qqengine/primitives/index.js';
import {Container} from './qqengine/Container.js';
import {collision} from './collision.js';

export class Foreground extends Subject.Group {
	
	constructor(options = {}) {
		options.selfAdd = true;
		options.isSortOnAdd = false;
		super(options);
	}
	
	tick(delta) {
		super.tick(delta);
		const solids = this._getSolids();
		for ( let i = 0; i < solids.length; ++i ) {
			for ( let j = i+1; j < solids.length; ++j ) {
				const hit = solids[i].getCollision(solids[j]);
				if ( hit ) {
					collision(solids[i], solids[j], hit);
				}
			}
		}
	}
	
	tickSortByZ() {
		this._sortSubjectsByZ();
	}
	
	sortByZ() {
		this._sortSubjectsByZ();
	}
	
	_sortSubjectsByZ() {
		const solids = [...this.getSubjects()];
		this.getSubjects().sort((a, b) => {
			if ( a.getSolidPosition().y() === b.getSolidPosition().y() ) {
				return solids.indexOf(a) - solids.indexOf(b);
			}
			return a.getSolidPosition().y() - b.getSolidPosition().y();
		});
	}
	
	_getSolids() {
		return this.getSubjects().filter(
			subj => subj.isSolid && subj.isSolid()
		);
	}
	
}
