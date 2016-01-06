var Tardis = require('../app/app');

var cb = function(delta, q){

	console.log('popped delta...');
	console.log(delta);

};

var queue = new Tardis.Queue(cb);

var eventDeltas = [{
	foo: 'bar1'
},{
	foo: 'bar2'
},{
	foo: 'bar3'
},{
	foo: 'bar4'
}];

for(var i = 0; i<eventDeltas.length; i++){

	console.log('added event delta...');
	console.log(eventDeltas[i]);
	queue.enqueue(eventDeltas[i]);

}

queue.start();