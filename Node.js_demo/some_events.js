// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var event = new events.EventEmitter();

event.on('some_event', function() {
	console.log('some_event');
})

setTimeout(function() {
	event.emit('some_event');
}, 1000);