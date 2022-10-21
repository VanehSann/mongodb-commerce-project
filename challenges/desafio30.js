db.produtos.updateMany({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { _id: 0, curtidas: 1, nome: 1 }); 

// https://www.mongodb.com/docs/v4.4/reference/operator/aggregation/unset/
