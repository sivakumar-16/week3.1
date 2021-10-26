// No need to change the following code
// The area object defines the div in which the balls will be created
const area = {
    element: document.getElementById('area'),
    width: 1000,
    height: 600,
  }
  
  // No need to change the following code
  // The initialize function creates the area div on the Html page
    function initialize() {
        area.element.style.width = area.width + 'px';
        area.element.style.height = area.height + 'px';
        document.body.appendChild(area.element);
    }
  
  // No need to change the following code
  // The moveTo function moves a given ball to a set x and y coordinates on the page
  
  let movement = {
    moveTo: function (x, y) {
      this.element.style.left = x + 'px';
      this.element.style.top = y + 'px';
    },
    // The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
    changeDirectionIfNecessary: function (x, y) {
      if (x < 0 || x > area.width - this.width) {
        this.dx = -this.dx;
      }
      if (y < 0 || y > area.height - this.height) {
        this.dy = -this.dy;
      }
    },
    // TODO: implement the create function
    create: function (color, dx, dy) {
        var newBall = Object.create(this);
          // TODO: Set newBall properties: dx, dy, width, height
  
    // TODO: set the newBall.element property and initialize it to a Html element "div"
    // TODO: set the backgroundColor, width and height style properties for newBall.element
    // This line set the CSS class for newBall.element. No need to change this line
    
  // TODO: set the width and height of newBall based on newBall.element
    // Hint: use the Javascript parseInt() function to convert a string value to integer
    // TODO: use the Javascript appendChild() function to add newBall.element to the area element
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 80;
        newBall.height = 80;
        newBall.element = document.createElement('div');
        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';
        newBall.element.className += ' ball';
        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        area.element.appendChild(newBall.element);
        return newBall;
    },
    // TODO: implement the update function
    update: function (x, y) {
      // TODO: use the moveTo() function to move the ball
        
        // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms
      
      //setTimeout(changeDirectionIfNecessary(ball, x, y),16);
      //setTimeout(update(ball, x + ball.dx, y + ball.dy),16);
      // Uncomment these lines for step 1 of the activity
      // This is expected to create 3 balls within the area div    
        this.moveTo(x, y);
        var ball = this;
        setTimeout(function () {
            ball.changeDirectionIfNecessary(x, y);
            ball.update(x + ball.dx, y + ball.dy);
        }, 16);
    }
  };
  
  initialize();
  const ball1 =  movement.create("yellow", 6, 3);
  const ball2 =  movement.create("white", 2, 5);
  const ball3 =  movement.create("black", 4, 2);
  moveTo(ball1, 1, 1);
  moveTo(ball2, 10, 10);
  moveTo(ball3, 20, 20);
  
  ball1.update(70, 0);
  ball2.update(20, 200);
  ball3.update(300, 330);
  
  if (typeof module !== 'undefined') {
      module.exports = { update, create, changeDirectionIfNecessary, moveTo, area };
    }