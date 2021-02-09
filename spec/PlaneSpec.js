describe("Plane", function() {
  it("default flying status should be true", function() {
    plane = new Plane;
    expect(plane.isFlying).toBe(true);
  })

  it("sets flying status to false, when plane has landed", function() {
    plane = new Plane;
    airport = new Airport;
    airport.land(plane);
    expect(plane.isFlying).toBe(false);
  });
})
