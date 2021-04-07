describe('The yearsAgo function', function(){
    it('should return 25 if 1996 was subtracted from 1976', function(){
        assert.equal(25, yearsAgo(1996));
    });
    it('should return 0 if 1976 was subtracted from 1976', function(){
        assert.equal(45, yearsAgo(1976));
    });
    it('should return 175 if 1846 was subtracted from 1976', function(){
        assert.equal(175, yearsAgo(1846));
    });
});