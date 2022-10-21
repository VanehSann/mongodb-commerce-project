db.produtos.countDocuments({ ingredientes: { $size: 4 } });

// https://www.mongodb.com/docs/v4.4/tutorial/query-arrays/?_ga=2.204176656.1451221590.1666309304-1528960122.1666309304#query-an-array-by-array-length