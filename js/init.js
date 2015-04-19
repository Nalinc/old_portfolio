var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){

		if(screen.width < 640){
			dimension = 400; 
			radValue = 20;
			radInc = 14;
			strokeValue = 12
			strokeValueHover = 15;
			fontStyle = '10px Arial'
		}
		else{
			dimension = 600; 
			radValue = 30;
			radInc = 20;
			strokeValue = 18
			strokeValueHover = 20;
			fontStyle = '12px Arial'
		}
		var r = Raphael('diagram', dimension, dimension),
			rad = radValue,
			defaultText = 'Skills',
			speed = 100;
		
		r.circle((dimension/2), (dimension/2), radValue).attr({ stroke: 'none', fill: '#f6f6f6' });
		
		var title = r.text((dimension/2), (dimension/2), defaultText).attr({
			font: fontStyle,
			fill: '#000'
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = (dimension/2) + rad * Math.cos(b),
				sy = (dimension/2) - rad * Math.sin(b),
				x = (dimension/2) + rad * Math.cos(a),
				y = (dimension/2) - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();
			
			rad += radInc;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': strokeValue });
			
			z.mouseover(function(){
                this.animate({ 'stroke-width': strokeValueHover, opacity: .80 }, 800, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': strokeValue, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
            });
		});
		
	}
}
$(function(){ o.init(); });
