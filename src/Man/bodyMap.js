import {Point, Size} from '../qqengine/primitives/index.js';
import {Map} from './Map.js';

const map = [
	{id: 0, name: 'human', index: new Point(0, 0)},
	{id: 1, name: 'orc', index: new Point(0, 3)},
];

export const bodyMap = new Map(map);
