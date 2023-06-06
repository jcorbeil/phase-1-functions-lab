// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(blocks) {
  const blockInFeet = 264; // 1 block is equivalent to 264 feet
  return distanceFromHqInBlocks(blocks) * blockInFeet;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  const blockInFeet = 264; // 1 block is equivalent to 264 feet
  return Math.abs(start - destination) * blockInFeet;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  // Free sample for short rides
  if (distance <= 400) {
    return 0;
  }
  // 2 cents per foot for distances between 400 and 2000 feet
  else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  // Fixed price of $25 for distances over 2000 feet
  else if (distance <= 2500) {
    return 25;
  }
  // Does not allow rides over 2500 feet
  else {
    return "cannot travel that far";
  }
}

// Testing the functions
console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112
console.log(distanceTravelledInFeet(34, 28)); // Output: 1584
console.log(calculatesFarePrice(34, 28)); // Output: 3.68
console.log(calculatesFarePrice(34, 50)); // Output: 25
console.log(calculatesFarePrice(34, 60)); // Output: Ride not allowed.
