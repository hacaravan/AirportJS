"use strict"

describe("Airport", function() {
  var plane;
  var airport;
  var loadsOfPlanes;
  var bigAirport
  var fillBigAirport

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
      for (let i = 0; i < airport.capacity; i++) {
        loadsOfPlanes = new Plane();
        airport.land(loadsOfPlanes);
      }
      expect(function() { airport.land(plane) ;}).toThrow("Can't land plane, airport is full")
    });
  });

  describe("Airport capacity", function() {
    it("Defaults to 20", function(){
      for (let i = 0; i < 20; i++) {
        loadsOfPlanes = new Plane();
        airport.land(loadsOfPlanes);
      }
      expect(function() { airport.land(plane) ;}).toThrow("Can't land plane, airport is full")
    });
    describe("When passed a larger capacity at creation", function() {
      beforeEach(function() {
        bigAirport = new Airport(100);
        fillBigAirport = function() {
          for(let i = 0; i < 100; i++) {
            loadsOfPlanes = new Plane();
            bigAirport.land(loadsOfPlanes);
          }
        };
      });
      it("doesn't throw an error when filling that larger capacity", function(){
        expect(fillBigAirport).not.toThrow("Can't land plane, airport is full") ;
      });
      it("throws an error after reaching that capacity", function() {
        fillBigAirport()
        expect(function() { bigAirport.land(plane) } ).toThrow("Can't land plane, airport is full")
      })
    });
  });
});
