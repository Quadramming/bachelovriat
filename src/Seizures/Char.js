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
import {Slot} from '../Items/Slot.js';
import {Hammer} from '../Items/Hammer.js';
import {Gold} from '../Items/Gold.js';
import {Controller} from '../Controller.js';

class Char extends Seizure {
	
	constructor(options) {
		super(options);
		//onClick: () => QQ.APP.closePopUp(),
		for ( let i = 0; i < 4; ++i ) {
			for ( let j = 0; j < 3; ++j ) {
				const slot = new Slot({
					parent: this.getWorld().getStage(),
					position: new Point(i*2, j*2)
				});
				
				if ( (i+j)%2 ) {
					slot.put(new Hammer({
						parent: slot,
					}));
				} else {
					slot.put(new Gold({
						parent: slot,
					}));
				}
			}
		}
	}
	
}

Manager.addToRegister('Char', Char);
