/**
 * a queue of event deltas to be turned into event blocks by the event writer
 */
// TODO: has to persist the last event ID incase of server failure
var list = [];



module.exports = function(cb){

	var running = false;

	var process = function(){
		running = true;

		while(list.length){
			var item = list.pop();
			cb(item, this);
		}
		running = false;
	};

	/**
	 * adds an item to the top of the queue
	 *
	 * @param item new record to add to queue
	 */
	this.enqueue = function(item){
		list.unshift(item);
		if(!running) process();
	};

	/**
	 * pops an item off bottom of list
	 *
	 * @param cb callback with err, eventDelta, eventType as arguments
	 */
	this.start = function(){

		if(!running) process();

	};

};