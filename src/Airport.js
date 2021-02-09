"use strict"

class Airport {

  plane = new Plane;

  land = plane => { 
    plane.isFlying = false;
    return plane;
  }
}

// isDivisibleByFive = n => { return n%5 === 0; }