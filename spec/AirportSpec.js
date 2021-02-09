"use strict"

describe("Airport", function() {

  beforeEach(function() {
    plane = new Plane;
    airport = new Airport;
  });

  describe("Landing a Plane", function() {
    it ("should be able to land a plane", function() {
      expect(airport.land(plane)).toEqual(plane);
    });

    it ("should not be able to land a plane if isFlying is false", function() {
      airport.land(plane);
      expect(function(){airport.land(plane);}).toThrow("Can't land a landed plane");
    });
  });

  describe("Instructing a plane to take off", function() {
    beforeEach(function() {
      airport.land(plane);
    });
    it("should be able to instruct a plane to take off", function() {
      expect(airport.takeOff(plane)).toEqual(plane);
    });
  });
});
