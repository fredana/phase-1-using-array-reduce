const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((arr, val) => {
  return arr + val;
}, 0);

console.log(totalBatteries); 

