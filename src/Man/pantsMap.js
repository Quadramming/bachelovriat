import {Point, Size} from '../qqengine/primitives/index.js';
import {Map} from './Map.js';

const map = [
	{id: 0, name: 'main', index: new Point(0, 0)},
	{id: 1, name: 'super', index: new Point(0, 1)},
];

export const pantsMap = new Map(map);

