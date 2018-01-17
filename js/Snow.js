function Snow() {
	Fireworm.call(this)
	this.ele.removeClass().addClass("snow")
}
Snow.prototype = {}
for (var k in Fireworm.prototype) { 
	Snow.prototype[k] = Fireworm.prototype[k]
}
Snow.prototype.fly = function() {
	var y = $("body").height() - 50
	this.ele.animate({top:y}, 5000)
}
