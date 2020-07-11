import * as QQ from '../qqengine/QQ.js';
import * as Text from '../qqengine/Text/index.js';
import * as Subject from '../qqengine/Subject/index.js';
import * as Actions from '../qqengine/Actions/index.js';
import * as GUI from '../qqengine/GUI/index.js';
import * as Sprite from '../qqengine/Sprite/index.js';
import {Point, Size, Rect} from '../qqengine/primitives/index.js';
import {Manager} from '../qqengine/Seizure/Manager.js';
import {Seizure} from '../qqengine/Seizure/Seizure.js';
import {Grass} from '../Grass.js';
import {Man} from '../Man/Man.js';
import {Controller} from '../Controller.js';

class GameHud extends Seizure {
	
	constructor(options) {
		super(options);
		new Controller({
			parent: this,
			seizure: this,
			fn: this.controller.bind(this)
		});
		this._player = options.parent.getPlayer();
		this._bagButton = null;
	}
	
	controller(direction) {
		this._player.go(direction);
	}
	
	showBag(subj) {
		if ( ! this._bagButton ) {
			this._bagButton = new Subject.Sprite({
				parent: this.getWorld().getStage(),
				selfAdd: true,
				onClick: () => QQ.APP.popUp('Char', {bag: subj, player: this._player}),
				image: 'bagHud',
				size: new Size(3),
				position: new Point(0, 3)
			});
			this._bagButton._BAG = subj;
		}
	}
	
	tick(delta) {
		super.tick(delta);
		if ( this._bagButton ) {
			if ( this._bagButton._BAG.getSolidPosition().getDistance(this._player.position()) > 1 ) {
				this.hideBag();
			}
		}
	}
	
	hideBag() {
		this._bagButton = this._bagButton.destructor();
	}
	
}

Manager.addToRegister('GameHud', GameHud);
