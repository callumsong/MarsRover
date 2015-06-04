var Rover = require('../../api/rover');
var rover;

describe("Moving", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
  });

  it("should be able to move forwards", function() {
    expect(rover.move(rover.position, 'F')).toEqual([1,2,'N']);
  });

  it("should be able to move backwards", function() {
    expect(rover.move(rover.position, 'B')).toEqual([1,0,'N']);
  });

});

describe("Turning", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
  });

  it("should be able to turn right", function() {
    expect(rover.turn(rover.position, 'L')).toEqual([1,1,'W']);
  });
})