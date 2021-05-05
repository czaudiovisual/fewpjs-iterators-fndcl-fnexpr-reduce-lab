const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = (battery, batches) => battery + batches;
// console.log(batteryBatches.reduce(totalBatteries));


// const batteryBatches = [4, 5, 3, 4, 4, 6, 5].reduce(function(totalBatteries, batteries) { 
//     return batteries + totalBatteries}, 0);
// console.log(batteryBatches);


const totalBatteries = batteryBatches.reduce(function(batches, batteries){
	batches = batches + batteries;
    return batches;
}, 0);
console.log(totalBatteries);
