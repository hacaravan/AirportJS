"use strict"

describe("Plane", function() {
  var plane = new Plane ;
  var airport = new Airport;

  it("default flying status should be true", function() {
    plane = new Plane;
    expect(plane.isFlying).toBe(true);
  })
})
