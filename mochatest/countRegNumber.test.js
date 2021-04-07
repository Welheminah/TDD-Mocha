describe('The countRegNumber function', function(){

    it('should return 3 if there are 3 registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return 3 & 2 respectively if there are 3 & 2 registration numbers', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328','CA 42665, CA 12 RT GP'), 3, 2);
    });
    it('should return 2 if there are 2 registration numbers', function(){
        assert.equal(countRegNumber('CA 42665, AA 12 RT GP'), 2);
    });
});