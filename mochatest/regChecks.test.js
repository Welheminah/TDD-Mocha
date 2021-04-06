describe('The regCheck function', function(){

    it('should return true if registration endswith GP', function(){
        assert.equal(true, regCheck('DV 23 NB GP','GP'));
    });
    it('should retrun false if registration dont endswith GP', function(){
        assert.equal(false, regCheck('CY 189-012', 'CA'));
    });
    it('should retrun false, please enter valid registration number and location, if the string is empty', function(){
        assert.equal('please enter valid registration number and location', regCheck('', ''));
    });
});