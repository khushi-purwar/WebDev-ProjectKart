function Paddle(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	  
	this.width = width;
	this.height = height;
	  
	this.color = color;
	  
	this.dx = 10;
	
	this.draw = function(context) {
		context.save();
		
		context.translate(this.x, this.y);
		
		context.fillStyle = this.color;
		context.fillRect (0, 0, this.width, this.height);
		
		context.restore();
	}
	
	// detects collison between the ball and paddle
	this.collide = function(ball) {
		if(ball.x + ball.radius >= this.x &&
			ball.x - ball.radius <= this.x + this.width &&
			ball.y + (ball.radius / 2) >= this.y) {
			// detects where on the paddle the ball has collided
			// and deflects the ball in the appropriate direction
			var percentage = (ball.x - this.x) / this.width;
			ball.dx = (percentage * ball.dxRange) - (ball.dxRange / 2);
			
			ball.dy = - ball.dy;
		}
	}
}