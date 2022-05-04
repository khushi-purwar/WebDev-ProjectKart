function Ball(x, y, radius, color) {
	this.x = x;
	this.y = y;
	
	this.dx = 10;
	this.dy = 10;
	
	this.dxRange = this.dx * 2;
	
	this.radius = radius;
	
	this.color = color;

	this.draw = function(context) {
		context.save();
		
		context.translate(this.x, this.y);
	  
		context.fillStyle = this.color;
		
		context.beginPath();
		context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
		context.closePath();
		
		context.fill();
		
		context.restore();
	}
	
	// prevents the ball from leaving the stage
	// (except via the bottom of the screen)
	this.bound = function(canvas) {
		if(this.x - (this.radius / 2) <= 0 ||
		   this.x + (this.radius / 2) >= canvas.width) {
			this.dx = - this.dx;
		}
		if(this.y - (this.radius / 2) <= 0) {
			this.dy = - this.dy;
		}
	}
}