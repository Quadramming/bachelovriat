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
import {Slot} from '../Inventory/Slot.js';
import {Hammer} from '../Items/Hammer.js';
import {Gold} from '../Items/Gold.js';
import {Controller} from '../Controller.js';

class Char extends Seizure {
	
	constructor(options) {
		options.isSortByZOnTick = true;
		options.isSortByZOnAdd = false;
		super(options);
		if ( options.bag ) {
			this._bag = options.bag;
			this._bagSlots = QQ.arrayOfNull(12);
			this.showBag();
		}
		this._player = options.player;
		this._playerSlots = QQ.arrayOfNull(12);
		this.showInventory();
		
		Subject.make({
			image: 'char',
			parent: this,
			selfAdd: true,
			position: new Point(-3, 0),
			onClick: () => this.close()
		});
	}
	
	close() {
		QQ.APP.closePopUp();
		for ( const [i, slot] of this._bagSlots.entries() ) {
			this._bag.item(i, slot.item());
		}
		for ( const [i, slot] of this._playerSlots.entries() ) {
			this._player.inventory(i, slot.item());
		}
	}
	
	showInventory() {
		let k = 0;
		for ( let i = 0; i < 4; ++i ) {
			for ( let j = 0; j < 3; ++j ) {
				const slot = new Slot({
					parent: this,
					position: new Point(i*2, -4-j*2)
				});
				slot.put(this._player.inventory(k));
				this._playerSlots[k] = slot;
				++k;
			}
		}
	}
	
	showBag() {
		let k = 0;
		for ( let i = 0; i < 4; ++i ) {
			for ( let j = 0; j < 3; ++j ) {
				const slot = new Slot({
					parent: this,
					position: new Point(i*2, j*2)
				});
				slot.put(this._bag.item(k));
				this._bagSlots[k] = slot;
				++k;
			}
		}
	}
	
}

Manager.addToRegister('Char', Char);
