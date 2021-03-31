describe('The isFromBellville function', function(){

    it('should return true if registration startswith CY', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should retrun false if registration dont startswith CY', function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
    it('should retrun false if there is no registration', function(){
        assert.equal(false, isFromBellville(''));
    });
});