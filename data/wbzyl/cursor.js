// cursor.js
//
// run this code from the command line:
//   mongo cursor.js

var options = { allowDiskUse: true, cursor: {batchSize: 4} };

var group = { $group: {_id: "$state", totalPop: {$sum: "$pop"}} };
var match = { $match: {totalPop: {$gte: 10000000}} };

var cursor = db.zipcodes.aggregate([
  group,
  match
], options );

cursor.forEach(function(d) {
  printjson(d);
});
