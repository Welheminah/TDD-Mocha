describe('The countAllPaarl function', function(){

    it('should return the number of all the registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123', 'CJ'), 3);
    });
    it('should return the number of all the registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345'), 2);
    });
    it('should return the number of all the registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 5);
    });
});