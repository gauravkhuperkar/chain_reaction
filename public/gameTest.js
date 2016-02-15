var game = require('./gameEntites.js').entities;
var expect = require('chai').expect;

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