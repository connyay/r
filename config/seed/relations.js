'use strict';
var Q = require('q');

module.exports = function (tags, types, recommendations) {
	var maxNumberOfTags = 4
    var dfd = Q.defer();
    var dfdList = [];
    recommendations.forEach(function (r) {
    	var numTags = Math.floor(Math.random() * maxNumberOfTags);
    	for(var i = 0; i < numTags; i++){
    		var tagNum = Math.floor(Math.random() * tags.length);
    		var score = Math.floor(Math.random() * 100);
    		dfdList.push(r.addTag(tags[tagNum], {	
            	score: score
        	}));
    	}
    });
    Q.all(dfdList).then(dfd.resolve);
    return dfd.promise;
};
