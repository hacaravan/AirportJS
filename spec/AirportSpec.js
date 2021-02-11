"use strict"

describe("Airport", function() {
  var plane;
  var airport;
  var stormyAirport;
  var loadsOfPlanes;
  var airportWeatherSpy;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    airportWeatherSpy = spyOn(airport, 'weather').and.returnValue('Sunny');
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
    describe("When the weather is stormy", function() {
      stormyAirport = new Airport();
      it("raises an error", function() {
        spyOn(stormyAirport, 'weather').and.returnValue('Stormy');
        expect(function() { stormyAirport.land(plane) } ).toThrow("Can't land in stormy weather")
      })
    })
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
    describe("When weather is stormy", function() {
      it("should raise an error", function() {
        airportWeatherSpy.and.returnValue("Stormy");
        expect(function() {airport.takeOff(plane) } ).toThrow("Can't take off in stormy weather");
      })
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
      var bigAirport;
      const fillBigAirport = function() {
        for(let i = 0; i < 100; i++) {
          loadsOfPlanes = new Plane();
          bigAirport.land(loadsOfPlanes);
        }
      };
      beforeEach(function() {
        bigAirport = new Airport(100);
        spyOn(bigAirport, 'weather').and.returnValue("Sunny");
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

  describe("Weather", function() {
    var randomWeatherAirport = new Airport();
    const weatherOptions = ['Stormy', 'Sunny'];
    let lotsOfRuns = [];
    const runWeatherLots = function() {
      for(let i = 0; i < 100000; i++) {
        let weather = randomWeatherAirport.weather();
        if(!lotsOfRuns.includes(weather)) {
          lotsOfRuns.push(weather)
        }
      }
    }
    it("returns either sunny or stormy", function() {
      expect(weatherOptions).toContain(randomWeatherAirport.weather());
    });
    it("returns both sunny and stormy", function() {
      runWeatherLots()
      expect(lotsOfRuns.sort()).toEqual(weatherOptions)
    })
    it("returns sunny much more often than stormy", function() {
      let weatherCount = {"Sunny":0, "Stormy":0}
      for(let i = 0; i < 100000; i++) {
        let weather = randomWeatherAirport.weather();
        weatherCount[weather] ++
      }
      expect(weatherCount["Sunny"]).toBeGreaterThan(2 * weatherCount["Stormy"])
    })
  })

});
