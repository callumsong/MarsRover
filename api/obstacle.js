function Obstacle(position) {
  this.position = position;
}

Obstacle.prototype.block = function(rover, obstacle) {
  if (rover.position[0] === obstacle.position[0] && rover.position[0] === obstacle.position[0]) return false;
  return true;
}

module.exports = Obstacle;