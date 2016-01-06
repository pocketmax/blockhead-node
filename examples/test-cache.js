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

// client side code that's used to populate a set of non-persistent event blocks as cache
var cache = new Tardis.Cache({
	maxSize: 1000
});

for(var i = 0; i<events.length; i++){
	cache.addEventBlock(events[i]);
}


cache.removeByPrevEventId(2);

console.log('getByEventId: 1');
console.log(cache.getByEventId(1));

console.log('getByPrevEventId: 2');
console.log(cache.getByPrevEventId(2));