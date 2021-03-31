describe('The isWeekday function', function(){

    it('should return false if day startswith S', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should return true if day dont startswith S', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should return false if day startswith S', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
    it('should return true if day dont startswith S', function(){
        assert.equal(true, isWeekday('Wednesday'));
    });
});