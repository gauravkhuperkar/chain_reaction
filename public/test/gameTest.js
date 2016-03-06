var assert = require('chai').assert;
var expect = require('chai').expect;
var game = require("../javaScript/gameEntites").entities;
 
describe('Tile', function(){
	var sampleGame = new game.Game(["player1", "player2"],6);
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

	    it('isSide and isMiddle fields should be false', function(){
	        var tile = sampleGame.tiles[0];
	        assert.notOk(tile.isSide);
	        assert.notOk(tile.isMiddle);
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

	    it('isCorner and isMiddle fields should be false', function(){
	        var tile = sampleGame.tiles[1];
	        assert.notOk(tile.isCorner);
	        assert.notOk(tile.isMiddle);
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

	    it('isCorner and isSide fields should be false', function(){
	        var tile = sampleGame.tiles[8];
	        assert.notOk(tile.isCorner);
	        assert.notOk(tile.isSide);
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

describe('blast',function(){
    it('should give false if hits of tile is not full to capacity',function(){
		var players = [{name : 'circuit'},{name : 'Munna_bhai'}];
		var myGame = new game.Game(players,4);
		var expectToNotBlast = game.blast({x:3,y:2,capacity:4,hits:0},myGame.tiles,"Munna_bhai",myGame.length);
		assert.notOk(expectToNotBlast);
    })

    it('should give true if hits of tile is full to capacity',function(){
		var players = [{name : 'circuit'},{name : 'Munna_bhai'}];
		var myGame = new game.Game(players,4);
		var expectToNotBlast = game.blast({x:3,y:2,capacity:4,hits:4},myGame.tiles,"Munna_bhai",myGame.length);
		assert.ok(expectToNotBlast);
    })
})

describe('hit',function(){
	it('should allow to hit to any player if tile is empty',function(){
		var tile = {x:2, y:2, capacity:4, owner:null, hits:0};
		var expectToHit = game.hit(tile,'pappu');
		assert.ok(expectToHit);
    })

    it('should give false if the player heated tile is not the owner of tile',function(){
		var tile = {x:2, y:2, capacity:4, owner:"Nene", hits:0};
		var expectToHit = game.hit(tile,"Dixit");
		assert.notOk(expectToHit);
    })

    it('should give true even if tile heated preciously by same owner',function(){
		var tile = {x:3, y:2, capacity:4, owner:"Dixit", hits:2};
		var expectToHit = game.hit(tile,"Dixit");
		assert.ok(expectToHit);
    })

    it('should increase hit of tile by one',function(){
		var tile = {x:3, y:3, capacity:4, owner:"Roshan", hits:2};
		var hit = game.hit(tile,"Roshan");
		assert.equal(tile.hits,3);
    })
  
})