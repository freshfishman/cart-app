var Mock =require('mockjs');
var lodash = require('lodash');

module.exports = function(){
	return {
		products :lodash.times(500,function(n){
			return {
				id:n,
				title : Mock.Random.ctitle(10,15),
				img : Mock.Random.img('200x200',Mock.Random.color()),
				content : Mock.Random.cparagraph(33,10),
				time : Mock.Random.date('yyyy-MM-dd'),
				stars : Mock.mock({
					'number|1-100':100
				})
			}
		})
	}
}