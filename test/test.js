var titleCase = require('../');
var assert = require("assert")

describe('TitleCase', function(){
  describe('String#toTitleCase', function(){
    it('should be title case', function(){
      assert.equal('Title Case' ,'title case'.toTitleCase());
    })
  })
})


