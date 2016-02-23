var game = require('./gameEntites.js').entities;
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Tile', function(){
	it('should have position', function(){
		var tile = new game.Tile({x:1,y:2},null);
		expect(tile.position).to.deep.equal({x:1,y:2});
	});

	it('should have owner', function(){
		var tile = new game.Tile({x:2,y:2},'circuit');
		expect(tile.owner).to.equal('circuit');
	});

	it('should have zero hits initially', function(){
		var tile = new game.Tile({x:0,y:0},null);
		expect(tile.hits).to.equal(0);
	});
});

describe('makeTile', function(){
	it('should returns an array of tiles', function(){
		var make_tile = game.makeTiles(2);
		expect(make_tile).to.be.an('array');
	});

	it('should return tiles of square of given length',function(){
		var make_tile = game.makeTiles(4);
		expect(make_tile.length).to.equal(16);
	});

	it('should return empty array if length is undefined',function(){
		var make_tile = game.makeTiles();
		expect(make_tile.length).to.equal(0);
	});

	it('should retuns array of objects',function(){
		var make_tile = game.makeTiles(3);
		expect(make_tile[0]).to.be.an('object');
	});

	it('should provide all side tiles',function(){
		var tiles = game.makeTiles(6);
		var sideTiles = tiles.filter(function(tile){
			if(tile.isSide) return tile;
		}).length;
		expect(sideTiles).to.equal(16);
	})

	it('should provide four corner tiles',function(){
		var tiles = game.makeTiles(6);
		var cornerTiles = tiles.filter(function(tile){
			return tile.isCorner;
		}).length;
		expect(cornerTiles).to.equal(4);
	})
});

describe('Game',function(){
	it('should start with two player',function(){
		var players = [{name : 'circuit'},{name : 'Munna_bhai'}];
		var myGame = new game.Game(players,4);
		assert.ok(myGame.isStarted);
	})
	it('should not start if two player are not present',function(){
		var players = [{name : 'Munna_bhai'}];
		var myGame = new game.Game(players,4);
		assert.notOk(myGame.isStarted());
	})
})