
var titleCase = exports = module.exports = require('./libs/title-case');

String.prototype.toTitleCase = function(){
	return titleCase(this);	
};


