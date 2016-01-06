/**
 * a stack of cached event blocks
 */

// TODO: refactor to be a collection with a size limit. evacuate on least used. fetch by eventId or prevEventId
var LfuMap = require("collections/lfu-map");


// used as cache for most recently fetched blocks
// needs to be a singleton. One instance per client
// attach stores to the stack with load balancing logic
// as requests for event blocks come in, check the static and if not present, fetch from store
module.exports = function(cfg){

	var map = new LfuMap(null, cfg.maxSize);

	// gets an event by eventId
	this.getById = function(id){
		return map.get(id, false);
	};

	/**
	 * adds an event to the event stack. Also enforces maximum size of the stack if specified
	 *
	 * @param {string} eventBlock The event block to add to the stack
	 *
	 */
	this.addEventBlock = function(id, eventBlock){
		map.add(eventBlock, id);
	};

};