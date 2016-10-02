var _ = require('lodash');
module.exports = function(cfg){

	this.addBlock = function(id, payload, prevId, cb){
		if (_.isEmpty(id) || _.isEmpty(payload) || _.isEmpty(prevId)) {
			cb(true);
			return false;
		}

		cfg.addBlock(id, payload, prevId, function(err, resp){
			console.log(arguments);
			cb(false, 'it really worked');
		});
	};

	this.getBlockById = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}

		cfg.getBlockById(id, function(err, resp){
			cb(err, resp);
		});
	};

	this.getBlocksByIds = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}

		cfg.getBlocksByIds(id, function(err, resp){

		});

	};

	this.getBlockByPrevId = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}
		cfg.getBlockByPrevId(id, function(err, resp){
			cb(err, resp);
		});
	};
	this.getBlocksByPrevIds = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}
		cfg.getBlocksByPrevIds(id, function(err, resp){
				cb()
		});
	};

	this.deleteBlockById = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}
		cfg.deleteBlockById(id, function(err, resp){

		});

	};
	this.deleteBlocksByIds = function(id, cb){
		if(_.isEmpty(id)) {
			cb(true);
			return false;
		}
		cfg.deleteBlocksByIds(id, function(err, resp){

		});

	};
};


