import * as QQ from '../qqengine/QQ.js';
import * as Text from '../qqengine/Text/index.js';
import * as Subject from '../qqengine/Subject/index.js';
import * as Actions from '../qqengine/Actions/index.js';
import * as GUI from '../qqengine/GUI/index.js';
import * as CONST from '../qqengine/CONST/index.js';
import * as Sprite from '../qqengine/Sprite/index.js';
import {Point, Size, Rect} from '../qqengine/primitives/index.js';
import {Manager} from '../qqengine/Seizure/Manager.js';
import {Seizure} from '../qqengine/Seizure/Seizure.js';
import {Grass} from '../Grass.js';
import {Map} from '../Map.js';
import {Man} from '../Man/Man.js';
import {Enemy} from '../Man/Enemy.js';
import {Controller} from '../Controller.js';
import {Foreground} from '../Foreground.js';
import {CoinUp} from '../CoinUp.js';
import {Gold} from '../Gold.js';
import {Bag} from '../Bag.js';

class Main extends Seizure {
	
	constructor(options) {
		super(options);
		this.setCamera(new Size(8, 8));
		this.getWorld().background('black');
		
		this._background = new Subject.Group();
		//this._background.addSubject(new Grass({seizure: this}));
		this.addSubject(this._background);
		
		this._foreground = new Foreground();
		this.addSubject(this._foreground);
		
		let map = new Map();
		this._player = map.fill(this._background, this._foreground);
		this.cameraFollow(this._player);
		this._setHud('GameHud');
	}
	
	addToForeground(subj) {
		this._foreground.addSubject(subj);
	}
	
	tick(delta) {
		super.tick(delta);
		this._foreground.forSubjects((subj) => {
			if ( this._player.getSolidRect().isContains(subj.getSolidPosition()) ) {
				if ( subj instanceof Bag ) {
					this.getHud().showBag(subj);
				}
				if ( subj instanceof Gold ) {
					subj.delete();
					new CoinUp({
						position: this._player.position(),
						selfAdd: true,
						parent: this.getWorld().getStage()
					});
				}
			}
			if ( subj instanceof Enemy ) {
				if ( this._player.getDistance(subj) < 1 ) {
					this._player.addHitTarget(subj);
				}
			}
			
		});
	}
	
	getPlayer() {
		return this._player;
	}
	
}

Manager.addToRegister('Main', Main);
