"use strict"

describe("Airport", function() {
  var plane;
  var airport;
  var loadsOfPlanes;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });


  describe("Landing a Plane", function() {
    it ("should be able to land a plane", function() {
      expect(airport.land(plane)).toEqual(plane);
    });

    it ("should not be able to land a plane if isFlying is false", function() {
      airport.land(plane);
      expect(function(){airport.land(plane);}).toThrow("Can't land a landed plane");
    });

    it("sets flying status to false", function() {
      airport.land(plane);
      expect(plane.isFlying).toBe(false);
    });

  });

  describe("Instructing a plane to take off", function() {
    beforeEach(function() {
      airport.land(plane);
    });
    it("should be able to instruct a plane to take off", function() {
      expect(airport.takeOff(plane)).toEqual(plane);
    });
    it("should not be able to take off if it is not flying", function() {
      plane.isFlying = true;
      expect(function() { airport.takeOff(plane) ;}).toThrow("Can't take off a flying plane");
    });
    it("sets flying status to true", function() {
      airport.takeOff(plane)
      expect(plane.isFlying).toBe(true)
    })
  });

  describe("Airport availble spaces", function() {
    it("can't land a plane if the airport is full", function(){
      var fullAirport = new Airport();
      for (var i = 0; i < 20; i++) {
        loadsOfPlanes = new Plane();
        fullAirport.land(loadsOfPlanes);
      }
      expect(function() { fullAirport.land(plane) ;}).toThrow("Can't land plane, airport is full")
    });
  });
});
