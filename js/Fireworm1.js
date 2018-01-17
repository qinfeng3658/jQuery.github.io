function Fireworm(){
	this.ele = $('<div></div>')
	this.ele.addClass('fireworm')
	this.ele.appendTo('body')
	
	var x = Math.random()*($('body').width()-50)
	var y = Math.random()*($('body').height()-50)
	
	this.ele.css({left:x,top:y})
}
Fireworm.prototype.fly =function(){
	var a =this
	var x =Math.random()*($('body').width()-50)
	var y =Math.random()*($('body').height()-50)
	this.ele.animate({left:x, top:y},2000,function(){
		a.fly()
	})
}
