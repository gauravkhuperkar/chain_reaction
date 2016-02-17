var entities = {};

entities.Tile = function(position, owner) {
	this.position = position;
	this.owner = owner;
	this.hits = 0;
}

entities.makeTiles = function(length) {
	var tiles = [];
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			var tile = new entities.Tile([i,j], null)
			tiles.push(tile);
		}
	}
	return tiles;
}

// Tile.prototype = {
// 	isCornerPosition : function(){
// 		var corners = [0,7];
// 		return ((this.position[0].indexOf(corners) >=0) && (this.position[1].indexOf(corners)) >= 0)
// 		? true 
// 		: false;
// 	},

// 	isSidePosition : function(){
// 		var side = [1,2,3,4,5,6];
// 		var corners = [0,7];

// 	},

// 	hitCount : function(){
// 		this.hits++;
// 	},

// 	isBlast : function(position){

// 	},

// 	capacity : function(){

// 	}
// };

entities.Game = function(player1, player2, length){
	this.players = {player1 : player1, player2 : player2}
	this.tiles = entities.makeTiles(length);
}


entities.Game.prototype = {

	isStarted : function(){
		return (this.players.player1.name && this.players.player2.name) ? true : false;
	},

	// isEnd : function(){

	// },

	// currentPlayer : function(){

	// },

	// givePositionOfTile : function(tile){
	// 	return strirng..corner,side,middle;
	// }
};


var Player = function(name,color){
	this.name = name;
	this.color = color;
}

exports.entities = entities;