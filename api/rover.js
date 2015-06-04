function Rover (position) {
  this.position = position;
}

Rover.prototype.move = function(rover, direction, planet) {
  var compass = {
    'N': [1, 1],
    'S': [1, -1],
    'E': [0, 1],
    'W': [0, -1]
  };
  if (planet.constrain(rover, planet.bounds)) {
    if (direction === 'F') {
      rover.position[compass[rover.position[2]][0]] += compass[rover.position[2]][1];
    } else if (direction === 'B') {
      rover.position[compass[rover.position[2]][0]] -= compass[rover.position[2]][1];
    }
  } else {
    return rover.position;
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

Rover.prototype.roam = function(directions, rover, planet) {
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === 'F' || directions[i] === 'B') {
      rover.move(rover, directions[i], planet);
    } else if (directions[i] === 'L' || directions[i] === 'R') {
      rover.turn(rover, directions[i]);
    }
  }
  return rover.position;
}

module.exports = Rover;