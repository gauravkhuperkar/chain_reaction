var ld = require('lodash');
var entities = {};

entities.Tile = function(position, owner) {
	this.position = position;
	this.owner = owner;
	this.hits = 0;
	this.capacity = 4;
	this.isCorner = false;
	this.isSide = false;
	this.isMiddle = true;
}


entities.setCornerTiles = function(tiles,length) {
	var corners = [
		{x:0,y:0},{x:0,y:length-1},{x:length-1,y:0},{x:length-1,y:length-1}
	];
	tiles.forEach(function(tile){
		var index = ld.findIndex(corners,tile.position);
		if(index >=0){
			tile.capacity = 2;
			tile.isCorner = true;
			tile.isMiddle = false;
		}
	})

	return entities.setSideTiles(tiles,length);
}

entities.setSideTiles = function(tiles,length) {
	var sideTiles = [];
	for (var i = 1; i < length-1; i++) {
		sideTiles.push({x:0,y:i});
		sideTiles.push({x:length-1,y:i});
		sideTiles.push({x:i,y:0});
		sideTiles.push({x:i,y:length-1});
	}
	tiles.forEach(function(tile){
		var index = ld.findIndex(sideTiles,tile.position);
		if(index >= 0 ) {
			tile.capacity = 3;
			tile.isSide = true;
			tile.isMiddle = false;
		}
	});
	return tiles;
}

entities.makeTiles = function(length) {
	var tiles = [];
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			var tile = new entities.Tile({x:i,y:j}, null);
			tiles.push(tile);
		}
	}
	return entities.setCornerTiles(tiles,length);
};

entities.Game = function(players, length){
	this.players = players;
	this.tiles = entities.makeTiles(length);
	this.length = length;
}


entities.Game.prototype = {
	isStarted : function(){
		return this.players.length == 2;
	}
}


var Player = function(name,color){
	this.name = name;
	this.color = color;
}

exports.entities = entities;