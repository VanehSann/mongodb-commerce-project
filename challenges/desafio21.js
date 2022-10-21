db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { ingredientes: 1 } });
db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 }); 

// https://www.mongodb.com/docs/manual/reference/operator/update/pop/