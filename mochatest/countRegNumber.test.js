describe('The countRegNumber function', function(){

    it('should return length of the registration', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return length of the registration', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328','CA 42665, AA 12 RT GP'), 3, 2);
    });
    it('should return length of the registration', function(){
        assert.equal(countRegNumber('CA 42665, AA 12 RT GP'), 2);
    });
});