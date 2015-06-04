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

  it("should be able to turn left", function() {
    expect(rover.turn(rover.position, 'L')).toEqual([1,1,'W']);
  });

  it("should be able to turn right", function() {
    expect(rover.turn(rover.position, 'R')).toEqual([1,1,'E']);
  });
});

describe("Roaming", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
  });

  it("should be able to take two steps east and two steps north", function() {
    expect(rover.roam('RFFLFF')).toEqual([3,3,'N']);
  });

  it("should be able to take two steps north and one step west", function() {
    expect(rover.roam('FFLF')).toEqual([0,3,'W']);
  });

  it("should be able to go three steps east and three steps west", function() {
    expect(rover.roam('RFFFLLFFF')).toEqual([1,1,'W']);
  });

  it("should be able to go two steps north and two steps south", function() {
    expect(rover.roam('FFRRFF')).toEqual([1,1,'S']);
  });
});