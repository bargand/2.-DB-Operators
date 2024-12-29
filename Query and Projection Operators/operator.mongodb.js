use("DB-Operators");

db.operators.insertMany([
  {
    name: "Debargha Nandi",
    price: 0,
    Assignments: 34,
    projects: 45,
  },
  {
    name: "Arjun Mehta",
    price: 0,
    Assignments: 28,
    projects: 22,
  },
  {
    name: "Sneha Roy",
    price: 0,
    Assignments: 40,
    projects: 48,
  },
  {
    name: "Rahul Sharma",
    price: 0,
    Assignments: 30,
    projects: 36,
  },
  {
    name: "Priya Verma",
    price: 0,
    Assignments: 25,
    projects: 10,
  },
  {
    name: "Aditya Rao",
    price: 0,
    Assignments: 20,
    projects: 25,
  },
  {
    name: "Kavya Iyer",
    price: 0,
    Assignments: 36,
    projects: 22,
  },
  {
    name: "Rohan Das",
    price: 0,
    Assignments: 38,
    projects: 50,
  },
  {
    name: "Ishita Gupta",
    price: 0,
    Assignments: 32,
    projects: 22,
  },
  {
    name: "Aryan Patel",
    price: 0,
    Assignments: 18,
    projects: 22,
  },
]);

db.operators.find({projects: 22})

// // equal to(eq)
db.operators.find({projects: {$eq: 22}})

//greater than(gt)
db.operators.find({ Assignments: { $gt: 18 } });
db.operators.updateMany(
  { projects: { $eq: 22 } },
  { $set: { Assignments: 400 } }
);

db.operators.find({Assignments: {$gte: 18}})
db.operators.updateMany({projects: {$gte: 22}}, {$set: {Assignments: 500}})

db.operators.find({ projects: 22 });

//less than(lt)
db.operators.find({Assignments: {$lt: 30}})

db.operators.updateMany({Assignments: {$lt: 20}}, {$set: {Assignments: 5000}})


db.operators.updateMany({price: 0},{$set: {price: 100}})

