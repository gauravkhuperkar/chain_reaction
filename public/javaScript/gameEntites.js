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

var blast = function(tileToBlast,tiles,owner,length){
	if(tileToBlast.capacity != tiles.hits)
		return false;
	// index of tile to blast (current tile)
	var tileToBlastPositionInTiles = ((tileToBlast.x*length)+tileToBlast.y);

	// left tile
	var a = ((tileToBlast.x*length)+tileToBlast.y-1);

	// right tile
	var b = ((tileToBlast.x*length)+tileToBlast.y+1);

	// up tile
	var c = (((tileToBlast.x-1)*length)+tileToBlast.y);

	// down tile
	var d = (((tileToBlast.x+1)*length)+tileToBlast.y);

	console.log("a->>",tiles[a],"\n\nb->> ",tiles[b],"\n\nc->>",tiles[c],"\n\nd->>",tiles[d],"\n\nkaliya->>",tiles[tileToBlastPositionInTiles]);
}

var g = new entities.Game(["qwer","qwert"],5);
console.log(blast({x:3,y:2},g.tiles,"qwert",5));

exports.entities = entities;