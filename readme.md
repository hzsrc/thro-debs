# thro-debs

A simple throttle & debounce tool of javascript.

###Usage:
	var fq = require('./thro-debs');
	$(window).resize(fq.debounce(100, function(evt){
	    ......
	}));
	$(document).mousemove(fq.throttle(40, function(evt){
	    ......
	}));
