db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });

// https://acervolima.com/mongodb-operador-de-data-atual-currentdate/
// https://www.mongodb.com/docs/manual/reference/operator/update/currentDate/