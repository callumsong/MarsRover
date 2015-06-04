function Rover (position) {
  this.position = position;
}

Rover.prototype.move = function(position, direction) {
  var compass = {
    'N': 1,
    'S': 1,
    'E': 0,
    'W': 0
  };
  if (direction === 'F') {
    position[compass[position[2]]] += 1;
  } else if (direction === 'B') {
    position[compass[position[2]]] -= 1;
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

module.exports = Rover;