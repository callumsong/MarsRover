function Rover (position) {
  this.position = position;
}

Rover.prototype.move = function(rover, direction) {
  var compass = {
    'N': [1, 1],
    'S': [1, -1],
    'E': [0, 1],
    'W': [0, -1]
  };
  if (direction === 'F') {
    rover.position[compass[rover.position[2]][0]] += compass[rover.position[2]][1];
  } else if (direction === 'B') {
    rover.position[compass[rover.position[2]][0]] -= compass[rover.position[2]][1];
  }

  return rover.position;
};

Rover.prototype.turn = function(rover, direction) {
  var left = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N'
  }

  var right = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
  }

  if (direction === 'L') {
    rover.position[2] = left[rover.position[2]];
  } else if (direction === 'R') {
    rover.position[2] = right[rover.position[2]];
  }

  return rover.position;
}

Rover.prototype.roam = function(directions, rover, planet, obstacle) {
  var previous;
  for (var i = 0; i < directions.length; i++) {
    previous = rover.position;
    if (planet.constrain(rover, planet.bounds)) {
      if (directions[i] === 'F' || directions[i] === 'B') {
        rover.move(rover, directions[i]);
      } else if (directions[i] === 'L' || directions[i] === 'R') {
        rover.turn(rover, directions[i]);
      }
    } else return previous;
  }
  return rover.position;
}

module.exports = Rover;