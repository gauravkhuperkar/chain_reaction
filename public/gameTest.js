var game = require('./gameEntites.js').entities;
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Tile', function(){
	it('should have position', function(){
		var tile = new game.Tile([1,2],null);
		expect(tile.position).to.deep.equal([1,2]);
	});

	it('should have owner', function(){
		var tile = new game.Tile([2,2],'circuit');
		expect(tile.owner).to.equal('circuit');
	});

	it('should have zero hits initially', function(){
		var tile = new game.Tile([0,0],null);
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
});

describe('Game',function(){
	it('should start with two player',function(){
		var player1 = {name : 'circuit'};
		var player2 = {name : 'Munna_bhai'};
		var myGame = new game.Game(player1,player2,4);
		assert.ok(myGame.isStarted);
	})
	it('should not start if two player are not present',function(){
		var player1 = {name:undefined};
		var player2 = {name : 'Munna_bhai'};
		var myGame = new game.Game(player1,player2,4);
		assert.notOk(myGame.isStarted());
	})
})