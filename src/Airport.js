"use strict"

class Airport {

  // this.blah = "blah blah"

  constructor(capacity){
    this.planes = [];
    this.capacity = capacity || 20;
  }

  land = plane => {

    if (plane.isFlying) {
      if (this.planes.length >= this.capacity) {
        throw("Can't land plane, airport is full");
      }
      plane.isFlying = false;
      this.planes.push(plane)
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
    var foundPlane;
    foundPlane = this.planes.indexOf(plane)
    this.planes.splice(foundPlane, 1)
    return plane;
  }

}
