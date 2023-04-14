const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalBatteries); // Output: 31

