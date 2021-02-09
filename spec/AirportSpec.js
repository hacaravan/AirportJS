describe("Airport", function() {

    it ("should be able to land a plane", function() {
      let plane = "planey mcplaneface"
      let airport = new Airport
      expect(airport.land(plane)).toEqual(plane)
    });
});
