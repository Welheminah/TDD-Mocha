describe('The isFromCapeTown function', function(){

    it('should return true if registration startswith CA', function(){
        assert.equal(true, isFromCapeTown('CA 123 908'));
    });
    it('should retrun false if registration dont startswith CA', function(){
        assert.equal(false, isFromCapeTown('CJ 123 908'));
    });
    it('should retrun false if there is no registration', function(){
        assert.equal(false, isFromCapeTown(''));
    });
});