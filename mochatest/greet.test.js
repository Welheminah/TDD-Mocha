describe('The greet function', function(){

    it('should greet Tebogo correctly', function(){
        assert.equal('Hello, Tebogo', greet('Tebogo'));
    });
    it('should greet Moipone correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Moipone', greet('Moipone'));
    });
});