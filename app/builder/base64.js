var crypto = require('crypto');

module.exports = function(cfg) {

	this.writer = function(delta, prevBlockId, cb){

		delta.prevBlockId = prevBlockId;
		var payload = new Buffer(JSON.stringify(delta)).toString('base64');
		var blockId = crypto.createHash('md5').update(payload).digest('hex');
		cb(blockId, payload);

	};

	this.reader = function(blockId, block, cb){

		var payload = JSON.parse(new Buffer(block,'base64').toString());
		cb(payload);

	};

};