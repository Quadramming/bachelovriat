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
			seizure: this,
			fn: this.controller.bind(this)
		});
		this._player = options.parent.getPlayer();
	}
	
	controller(direction) {
		this._player.go(direction);
	}
	
}

Manager.addToRegister('GameHud', GameHud);
