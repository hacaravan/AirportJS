describe("Plane", function() {
  it("sets flying to false when landing in an airport", function() {
    airport = new Airport;
    plane = new Plane;
    airport.land(plane);
    expect(plane.isFlying).toBeFalsy();
  })
})
