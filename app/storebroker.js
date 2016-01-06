module.exports = function(cfg){

//	var cache = Cache.create([]);

//	cache.prevEvents.dfsd;
//	cache.events.dfsd;

	// the below functions match a store for drop in replacement support

	// adds an event block
	this.addEventBlock = function(eventId, prevEventId, eventBlock, cb){

	};

	// returns event block with a matching prevEventId
	this.getByPrevEventId = function(prevEventId, cb){

	};

	// returns event block with a matching eventId
	this.getByEventId = function(eventId, cb){

	};

	// returns many event blocks with a prevEventId of null
	this.getRootEventBlocks = function(cb){

	};

};