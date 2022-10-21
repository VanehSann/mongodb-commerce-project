db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateMany({ tags: { $in: ["bovino"] } }, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { _id: 0, vendasPorDia: 1, nome: 1 }); 

// https://www.mongodb.com/docs/v5.0/tutorial/query-array-of-documents/
