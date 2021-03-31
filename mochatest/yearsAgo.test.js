describe('The yearsAgo function', function(){
    it('should return a number that subtracted from 1996', function(){
        assert.equal(25, yearsAgo(1996));
    });
    it('should return a number that subtracted from 1976', function(){
        assert.equal(45, yearsAgo(1976));
    });
    it('should return a number that subtracted from 1846', function(){
        assert.equal(175, yearsAgo(1846));
    });
});