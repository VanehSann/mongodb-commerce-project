db.produtos.countDocuments({ nome: { $regex: /mc/i } });

// https://stackoverflow.com/questions/3305561/how-to-query-mongodb-with-like