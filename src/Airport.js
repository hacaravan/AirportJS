"use strict"

class Airport {

  plane = new Plane;

  land = plane => {
    if (plane.isFlying) {

      plane.isFlying = false;
      return plane;
    } else {
      throw("Can't land a landed plane");
    }
  }

  takeOff = plane => {
    if (plane.isFlying) {
      throw("Can't take off a flying plane");
    }
    plane.isFlying = true;
    return plane;
  }
}

// isDivisibleByFive = n => { return n%5 === 0; }
