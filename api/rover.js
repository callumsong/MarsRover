function Rover (position) {
  this.position = position;
}

Rover.prototype.move = function(position, direction) {
  var compass = {
    'N': [1, 1],
    'S': [1, -1],
    'E': [0, 1],
    'W': [0, -1]
  };
  if (direction === 'F') {
    position[compass[position[2]][0]] += compass[position[2]][1];
  } else if (direction === 'B') {
    position[compass[position[2]][0]] -= compass[position[2]][1];
  }

  return position;
};

Rover.prototype.turn = function(position, direction) {
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
    position[2] = left[position[2]];
  } else if (direction === 'R') {
    position[2] = right[position[2]];
  }

  return position;
}

Rover.prototype.roam = function(directions) {
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === 'F' || directions[i] === 'B') {
      this.move(this.position, directions[i]);
    } else if (directions[i] === 'L' || directions[i] === 'R') {
      this.turn(this.position, directions[i]);
    }
  }
  return this.position;
}

module.exports = Rover;