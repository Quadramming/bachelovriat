export class Map {
	
	constructor(map) {
		this._map = map;
	}
	
	getByName(name) {
		return this._map.find(
			(el) => el.name === name
		);
	}
	
	getIndexByName(name) {
		 return this.getByName(name).index;
	}
	
}
