var Tardis = require('../app/app');

var events = [{
	eventId: 1,
	prevEventId: null,
	payload: {foo: 'bar1'}
},{
	eventId: 2,
	prevEventId: 1,
	payload: {foo: 'bar2'}
},{
	eventId: 3,
	prevEventId: 2,
	payload: {foo: 'bar3'}
},{
	eventId: 4,
	prevEventId: 3,
	payload: {foo: 'bar4'}
}];

var broker = Tardis.storeBroker({

	// takes eventID
	// returns event block in a cb
	fetchEventBlockById: function(eventId, cb){

		for(var i = 0; i<events.length; i++){
			if(events[i].eventId === eventId){
				cb(null,events[i]);
				return true;
			}
		}
		cb(true);

	},

	// takes prevEventID
	// returns event block in a cb
	fetchEventBlockByPrevId: function(prevEventId, cb){

		for(var i = 0; i<events.length; i++){
			if(events[i].prevEventId === prevEventId){
				cb(null,events[i]);
				return true;
			}
		}
		cb(true);

	},

	// adds event block to event store
	addEventBlock: function(eventBlock, cb){

		events.unshift(eventBlock);
		cb(null, true);

	}
});

store.fetchEventByEventId('123123', function(err, eventBlock){

});
store.fetchEventByPrevEventId('123123', function(err, eventBlock){

});
store.addEventBlock(eventBlock, function(err, results){

});
