var assert = require('chai').assert;
var expect = require('chai').expect;
var game = require("../javaScript/gameEntites").entities;
 
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