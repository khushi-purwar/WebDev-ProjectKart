function Brick(x, y, width, height, color) {
	this.x = x;
	this.y = y;
  
	this.height = height;
	this.width = width;
  
	this.color = color;
  
	this.state = true;

	this.draw = function(context) {
		context.save();
		
		context.translate(this.x, this.y);
		
		context.fillStyle = this.color;
		
		context.fillRect (0,0,this.width,this.height);
		
		context.restore();
	}
	
	// detects collision between the brick and ball
	this.collide = function(ball) {
		if(this.state == true &&
		   ball.x - ball.radius <= this.x + this.width &&
		   ball.x + ball.radius >= this.x &&
		   ball.y - ball.radius <= this.y + this.height &&
		   ball.y + ball.radius >= this.y) {
			this.state = false;
			
			ball.dy = - ball.dy;
			
			return true;
		}
		else {
			return false;
		}
	}
}