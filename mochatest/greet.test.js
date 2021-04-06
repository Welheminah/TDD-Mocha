describe('The greet function', function(){

    it('should greet Tebogo correctly', function(){
        assert.equal('Hello, Tebogo', greet('Tebogo'));
    });
    it('should greet Moipone correctly', function(){
        assert.equal('Hello, Moipone', greet('Moipone'));
    });
    it('should greet Kabelo correctly', function(){
        assert.equal('Hello, Kabelo', greet('Kabelo'));
    });

});