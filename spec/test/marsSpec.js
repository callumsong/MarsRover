describe("MarsRover", function() {
  var Rover = require('../../api/rover');
  var rover;
  beforeEach(function() {
    rover = new Rover();
  });

  it("should be able to move forward", function() {
    expect(rover.move([0,0,'N'], 'F')).toEqual([0,1,'N']);
  });
});