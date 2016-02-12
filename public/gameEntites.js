var Tile = function(position, owner) {
	this.position = position;
	this.setOwner = owner;
	this.hits = 0;
}

// Tile.prototype = {
// 	isCornerPosition : function(){
// 		var corners = [0,8];
// 		return ((this.position[0].indexOf(corners) >=0) && (this.position[1].indexOf(corners)) >= 0)
// 		? true 
// 		: false;
// 	},

// 	isSidePosition : function(){
// 		var side = [1,2,3,4,5,6,7];
// 		var corners = [0,8];

// 	},

// 	hitCount : function(){
// 		this.hits++;
// 	},

// 	isBlast : function(position){

// 	}
// };

// var Game = function(player1, player2){
// 	this.players = {player1 : player1, player2 : player2}
// 	this.tiles = [];
// }

// Game.prototype = {
// 	startTheGame : function(){

// 	},

// 	isStarted : function(){

// 	},

// 	isEnd : function(){

// 	},

// 	currentPlayer : function(){

// 	}
// };

// var Player = function(name,color){
// 	this.name = name;
// 	this.color = color;
// }