db.produtos.updateMany({}, { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } });

db.produtos.find({}, { _id: 0, valoresNutricionais: 1, nome: 1 }); 

// https://www.mongodb.com/docs/v4.4/reference/operator/update/sort/?_ga=2.32773822.1451221590.1666309304-1528960122.1666309304#update-array-using-sort-only