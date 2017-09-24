/////////////////////////////////////////////////////////////////////////////////////////
// Dealing with constructor functions
/////////////////////////////////////////////////////////////////////////////////////////

// Constructor functions can also be used to create objects
// Acts as a description for the object it will create
// Example:

var Car = function() {      // function name starts with a capital, to make it clear it is a constructor
  this.wheels = 4;          // 'this' variable refers to the new objects being created by the constructor
  this.engines = 1;
  this.seats = 5;
};

// To call a constructor function we call it with the 'new' keyword in front of it:

var myCar = new Car();

// myCar is now an instance of the Car constructor that looks like the object it described:

{
  wheels: 4,
  engines: 1,
  seats: 5
}

// What if we don't always want to create the same object?
// We can add parameters to our constructor:

var Car = function(wheels, seats, engines) {      // parameters on this line
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

// Then when the constructor function is called, we can pass in arguments:
var myCar = new Car(6, 3, 1);                    // arguments on this line

// This will create an object as follows:
{
  wheels: 6,
  seats: 3,
  engines: 1
}

// Objects have their own attributes, called properties
// They also have their own functions, called methods
// We previously used 'this' to reference public properties
// Further explanation: https://www.freecodecamp.org/challenges/make-object-properties-private

// We can also create private properties and private methods
// To do this we create the variable inside the constructor using the var keyword we're familiar with
/* For example, what if we want to store the speed our car is traveling at but we only want outside 
code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way? */

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

// Function to get and set gears of a bike:

var Bike = function() {
  // private variable
  var gear = 1;
  
  // public methods
  this.getGear = function() {
    return gear;
  };
  this.setGear = function(set) {
    gear = set;
  };
};
