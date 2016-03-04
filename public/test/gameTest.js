var assert = require('chai').assert;
var expect = require('chai').expect;
var game = require("../javaScript/gameEntites").entities;
 
describe('Tile', function(){
	describe('position', function(){
		
	    it('should have position', function(){
	        var tile = new game.Tile({x:1,y:2},null);
	        expect(tile.position).to.deep.equal({x:1,y:2});
	    })
	 
	    it('should have owner', function(){
	        var tile = new game.Tile({x:2,y:2},'circuit');
	        expect(tile.owner).to.equal('circuit');
	    })
	 
	    it('should have zero hits initially', function(){
	        var tile = new game.Tile({x:0,y:0},null);
	        expect(tile.hits).to.equal(0);
	    })
	})

	describe('Corner Tiles', function(){
	    it('should have 2 capacity', function(){
	        var tile = new game.Tile({x:0,y:0},null);
	        expect(tile.capacity).to.equal(2);
	    })

	    it('isCorner field should be true', function(){
	        var tile = new game.Tile({x:0,y:0},null);
	        assert.ok(tile.isCorner);
	    })
	})

	describe('Side Tiles', function(){
	    it('should have 3 capacity', function(){
	        var tile = new game.Tile({x:1,y:0},null);
	        expect(tile.capacity).to.equal(2);
	    })

	    it('isSide field should be true', function(){
	        var tile = new game.Tile({x:1,y:0},null);
	        assert.ok(tile.isSide);
	    })
	})

	describe('Middle Tiles', function(){
	    it('should have 3 capacity', function(){
	        var tile = new game.Tile({x:1,y:2},null);
	        expect(tile.capacity).to.equal(4);
	    })

	    it('isMiddle field should be true', function(){
	        var tile = new game.Tile({x:1,y:4},null);
	        assert.ok(tile.isMiddle);
	    })
	})
})

describe('makeTile', function(){
	var sampleGame = new game.Game(["player1", "player2"],6)

    it('should provide all side tiles',function(){
        var tiles = sampleGame.tiles;
       
        var sideTiles = tiles.filter(function(tile){
          if(tile.isSide) return tile;
        }).length;
        expect(sideTiles).to.equal(16);
    })

    it('should provide four corner tiles',function(){
        var tiles = sampleGame.tiles;
        var cornerTiles = tiles.filter(function(tile){
            return tile.isCorner;
        }).length;
        expect(cornerTiles).to.equal(4);
    })
})
 
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