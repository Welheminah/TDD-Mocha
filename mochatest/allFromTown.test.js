describe('The countAllFromTown function', function(){

    it('should return number of registration that are from Stellebosch, starting with CL', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
    it('should return the of number registration that are from Paarl, starting with CJ', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'), 1);
    });
    it('should return the of number registration that are from Cape Town, starting with CA', function(){
        assert.equal(countAllFromTown('CA 942 501, CJ 64957, CA 67430', 'CA'), 2);
    });
    
});