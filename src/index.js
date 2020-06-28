import * as QQ from './qqengine/QQ.js';
import {game} from './gameGlobal.js';

import './Seizures/Main.js';
import './Seizures/GameHud.js';
import './Seizures/Char.js';


const images = [
	['grass1', 'images/grass1.png'],
	['grass2', 'images/grass2.png'],
	['grass3', 'images/grass3.png'],
	['bagHud', 'images/bagHud.png'],
	['wall', 'images/wall.png'],
	['hammer', 'images/hammer.png'],
	['bag', 'images/bag.png'],
	['gold', 'images/gold.png'],
	['floor', 'images/floor.png'],
	['mushroom', 'images/mushroom.png'],
	['rpg', 'images/rpg.png'],
	['rock', 'images/rock.png'],
	['char', 'images/char.png'],
	['slot', 'images/slot.png'],
	['body', 'images/body.png'],
	['chest', 'images/chest.png'],
	['bone', 'images/bone.png'],
	['skull', 'images/skull.png'],
	['pants', 'images/pants.png'],
];

const sounds = [
	// ['battle', 'sounds/battle.ogg'],
];

const appConfig = {
	imgs: images,
	sounds: sounds,
	showFps: false,
	game: game
};

QQ.start(appConfig);
