var Rover = require('../../api/rover');
var Planet = require('../../api/planet');
var rover;
var planet;

describe("Moving", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
    planet = new Planet([100,100]);
  });

  it("should be able to move forwards", function() {
    expect(rover.move(rover, 'F', planet)).toEqual([1,2,'N']);
  });

  it("should be able to move backwards", function() {
    expect(rover.move(rover, 'B', planet)).toEqual([1,0,'N']);
  });

});

describe("Turning", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
  });

  it("should be able to turn left", function() {
    expect(rover.turn(rover, 'L')).toEqual([1,1,'W']);
  });

  it("should be able to turn right", function() {
    expect(rover.turn(rover, 'R')).toEqual([1,1,'E']);
  });
});

describe("Roaming", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
    planet = new Planet ([100,100]);
  });

  it("should be able to take two steps east and two steps north", function() {
    expect(rover.roam('RFFLFF', rover, planet)).toEqual([3,3,'N']);
  });

  it("should be able to take two steps north and one step west", function() {
    expect(rover.roam('FFLF', rover, planet)).toEqual([0,3,'W']);
  });

  it("should be able to go three steps east and three steps west", function() {
    expect(rover.roam('RFFFLLFFF', rover, planet)).toEqual([1,1,'W']);
  });

  it("should be able to go two steps north and two steps south", function() {
    expect(rover.roam('FFRRFF', rover, planet)).toEqual([1,1,'S']);
  });

  it("should not let you go negative steps", function() {
    expect(rover.roam('LFF', rover, planet)).toEqual([0,1,'W']);
  });

  it("should not let you go outside of the given boundaries", function() {
    expect(rover.roam('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', rover, planet)).toEqual([1,100,'N']);
  });
});

describe("Constraints", function() {
  beforeEach(function() {
    rover = new Rover([1,1,'N']);
    planet = new Planet([100,100]);
  });

  it("should return false for values under 0", function() {
    rover.position = [-1,-1,'N'];
    expect(planet.constrain(rover, [100,100])).toEqual(false);
  });

  it("should return false for values over the bounds", function() {
    rover.position = [101,101,'N'];
    expect(planet.constrain(rover, [100,100])).toEqual(false);
  });

  it("should return true for valid values", function() {
    expect(planet.constrain(rover, [100,100])).toEqual(true);
  });
});