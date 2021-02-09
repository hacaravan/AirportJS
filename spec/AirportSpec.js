describe("Airport", function() {

    it ("should be able to land a plane", function() {
      let plane = new Plane
      let airport = new Airport
      expect(airport.land(plane)).toEqual(plane)
    });
});
