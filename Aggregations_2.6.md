## Aggregation Pipeline, version 2.6

[Stage operators](http://docs.mongodb.org/manual/reference/operator/aggregation/):

1. `$project` – specify document fields to be processed
1. `$match` – select documents to be processed, similar to find()
1. `$limit` – limit the number of documents to be passed to the next step
1. `$skip` – skip a specified number of documents
1. `$unwind` – expand an array, generating one output document for each array entry
1. `$group` – group documents by a specified key
1. `$sort` - sort documents
1. `$geoNear` – select documents near a geospacial location
1. `$out` – write the results of the pipeline to a collection (new in 2.6)
1. `$redact` – incorporates the functionality of `$project` and `$match` (?)

See also [expression operators](http://docs.mongodb.org/manual/reference/operator/aggregation/#expression-operators).


### Zipcodes data set

Each document has the following form:

```json
{
  "_id" : "35004",
  "city" : "Acmar",
  "state" : "AL",
  "pop" : 6055,
  "loc" : [-86.51557, 33.584132]
}
```

### Aggregation cursors 

Note, that aggregation cursors are not available within *mongo* shell.

*Example*: Get states with a population over 10 million.

```js
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
```

Cursor methods:

* `.toArray()` – iterates through docs and returns an array of the results
* `.forEach( func )`
* `.map( func )`
* `.hasNext()`
* `.next()`
* `.objsLeftInBatch()` – returns count of docs left in current batch
  (when exhausted, a new getMore will be issued)
* `.itcount()` – iterates through documents and counts them
