use("disaster-data")


// count all document
let count = db.data.countDocuments({});
console.log(count)

//disaster by disaster group
let dister_group= db.data.aggregate([
  { $group: { _id: "$Disaster Group", count: { $sum: 1 } } }
]);
console.log(dister_group)

//dister by region
let dister_region = db.data.aggregate([
  { $group: { _id: "$Region", count: { $sum: 1 } } }
]);
console.log(dister_region)

//dister by country
let disaster_country = db.data.aggregate([
  { $group: { _id: "$Country", count: { $sum: 1 } } }
]);
console.log(disaster_country)

//Compare disaster events between 2000-2011 and 2012-2024
let disaster_date = db.data.aggregate([
  { 
      $group: { 
          _id: { 
              period: { $cond: [{ $lte: ["$Start Year", 2011] }, "2000-2011", "2012-2024"] }
          }, 
          count: { $sum: 1 }
      }
  }
]);
console.log(disaster_date)

//Total deaths by period
// let disaster_death_period = db.data.aggregate([
//   { 
//       $group: { 
//           _id: { 
//               period: { $cond: [{ $lte: ["$Start Year", 2011] }, "2000-2011", "2012-2024"] }
//           }, 
//           totalDeaths: { $sum: { $toInt: "$Total Deaths" } }
//       }
//   }
// ]);
// console.log(disaster_death_period)

//Total number of affected persons by period
let affected_person_period = db.data.aggregate([
  { 
      $group: { 
          _id: { 
              period: { $cond: [{ $lte: ["$Start Year", 2011] }, "2000-2011", "2012-2024"] }
          }, 
          totalAffected: { $sum: { $toInt: "$Total Affected" } }
      }
  }
]);

//Top 5 disaster types by number of events
let top_disaster = db.data.aggregate([
  { $group: { _id: "$Disaster Type", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 }
]);

console.log(top_disaster)

//Top 5 disaster types by total deaths
// let disaster_total_death = db.data.aggregate([
//   { $group: { _id: "$Disaster Type", totalDeaths: { $sum: { $toInt: "$Total Deaths" } } } },
//   { $sort: { totalDeaths: -1 } },
//   { $limit: 5 }
// ]);
// console.log(disaster_total_death)

//Top 5 disaster types by total people affected
let total_people_effected = db.data.aggregate([
  { $group: { _id: "$Disaster Type", totalAffected: { $sum: { $toInt: "$Total Affected" } } } },
  { $sort: { totalAffected: -1 } },
  { $limit: 5 }
]);

//top 10 total death
let top_total_death = db.disasters.aggregate([
  { $group: { _id: "$Country", totalDeaths: { $sum: { $toInt: "$Total Deaths" } } } },
  { $sort: { totalDeaths: -1 } },
  { $limit: 10 }
]);
console.log(top_total_death)


let a = db.data.aggregate([
  { $group: { _id: "$Country", totalAffected: { $sum: { $toInt: "$Total Affected" } } } },
  { $sort: { totalAffected: -1 } },
  { $limit: 10 }
]);
console.log(a)

let b = db.data.aggregate([
  { $group: { _id: "$Country", totalDamage: { $sum: { $toInt: "$Total Damage" } } } },
  { $sort: { totalDamage: -1 } },
  { $limit: 10 }
]);
console.log(b)





// let continentEurope= db.data.find({Region: "Europe"})
// console.log(continentEurope)
