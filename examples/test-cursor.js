var store1;

var Tardis = require('../app/app')({
	store: store1,  // load balancing store config goes here
	cache: {
		maxSize: 100
	}
});


// fetch forward
// fetch backward
// exposes traversed event blocks

// used to traverse event chain
// TODO: need to flesh out how to query event chain. Going forwards, backwards, setting limits by TS or event ID, etc etc
// true is traverse backwards. default is false
var cursor = new Tardis.Cursor('startEventId', false, function (delta, eventId, prevEventId, eventType){

});

cursor.start();
cursor.stop();
cursor.continue();

