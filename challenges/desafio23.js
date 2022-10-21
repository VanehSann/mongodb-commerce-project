db.produtos.updateMany({}, { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } });

db.produtos.find({}, { _id: 0, tags: 1, nome: 1 }); 

// https://www.mongodb.com/docs/v4.4/reference/operator/update/push/?_ga=2.229882396.1451221590.1666309304-1528960122.1666309304#append-multip
// https://www.mongodb.com/docs/v4.4/reference/operator/update/sort/?_ga=2.32773822.1451221590.1666309304-1528960122.1666309304