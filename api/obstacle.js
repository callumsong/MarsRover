function Obstacle(position) {
  this.position = position;
}

Obstacle.prototype.block = function(position, obstacle) {
  if ((position[0] + 1 === obstacle.position[0] && position[1] === obstacle.position[1]) || (position[0] === obstacle.position[0] && position[1] + 1 === obstacle.position[1])) return false;
  if ((position[0] - 1 === obstacle.position[0] && position[1] === obstacle.position[1]) || (position[0] === obstacle.position[0] && position[1] - 1 === obstacle.position[1])) return false;
  return true;
};

module.exports = Obstacle;