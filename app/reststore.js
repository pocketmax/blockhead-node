var request = require('request');

module.exports = function(cfg){


	this.addEventBlock = function(eId, peId, eb, cb){
		request({
			url: cfg.url + eId,
			method: 'POST',
			json: true,
			body: {
				eventId: eId,
				prevEventId: peId,
				eventBlock: eb
			}
		}, function(err, msg, resp){
			if(err){
				console.log('got error...');
				console.log(err);

			} else {
				console.log('got response...');
				console.log(resp);

			}

			cb(err, resp);

		});

	}
};