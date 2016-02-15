var game = require('./gameEntites.js').entities;
var lodash = require('lodash');
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