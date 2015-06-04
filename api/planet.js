function Planet (bounds) {
  this.bounds = bounds;
}

Planet.prototype.constrain = function(rover, bounds) { 
  if (rover.position[0] <= 0 || rover.position[1] <= 0) return false;
  if (rover.position[0] >= bounds[0] || rover.position[1] >= bounds[1]) return false;
  return true;
}

module.exports = Planet;