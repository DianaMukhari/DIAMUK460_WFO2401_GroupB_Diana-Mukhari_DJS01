// Given Parameters
const parameters = {
  velocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  timeSeconds: 3600, // seconds (1 hour)
  distance: 0, // distance (km)
  remainingFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5 // fuel burn rate (kg/s)
};

// Function to calculate new velocity based on acceleration and time
function calcNewVelocity({ acceleration, velocity, timeSeconds }) {
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof timeSeconds !== 'number') {
      throw new Error("Invalid parameter type. Parameters must be numbers.");
  }
  // Convert velocity to m/s for consistent units
  const velocityMetersPerSecond = velocity * (1000 / 3600); // 1 km/h = 1000 m / 3600 s
  return (velocityMetersPerSecond + (acceleration * timeSeconds)) * (3600 / 1000); // Convert back to km/h
}

try {
  // Calculate new velocity based on acceleration
  const newVelocity = calcNewVelocity(parameters);
  
  // Calculate new distance in kilometers
  const newDistance = parameters.distance + (parameters.velocity * (parameters.timeSeconds / 3600)); // Convert time to hours
  
  // Calculate remaining fuel in kilograms
  const remainingFuelAmount = parameters.remainingFuel - (parameters.fuelBurnRate * parameters.timeSeconds);

  console.log(`Corrected New Velocity: Approximately ${newVelocity} km/h`);
  console.log(`Corrected New Distance: Approximately ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: Approximately ${remainingFuelAmount} kg`);
} catch (error) {
  console.error(error.message);
}
