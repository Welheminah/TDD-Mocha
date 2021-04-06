describe('The countAllFromTown function', function(){

    it('should return number of registration that are from Stellebosch, starting with CL', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should return the of number registration that are from Paarl, starting with CJ', function(){
        assert.equal(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'));
    });
    it('should return nothing there are registration numbers', function(){
        assert.equal(0, countAllFromTown(''));
    });
    
});