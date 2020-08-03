const sqlite3 = require("sqlite3").verbose()
// iniciando o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//Utilizar o objeto de banco de dados para as operações
db.serialize(() => {
  //Criar tabela
 /* db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)
  //Inserir dados na tabela
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `
  const values = [
    "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarinha",
    "Rio do Sul",
    "Resíduos Eletrôniocos, Lâmpadas"
  ]

  function  afterInsertData(err) {
    if(err) {
      return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)
  }
  db.run(query, values, afterInsertData)

 
  //Deletar um dado na tabela
  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("Registro deletado com sucesso!")
  })

   //Consultar dados na tabela
  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }
    console.log("Aqui estão seus registros: ")
    console.log(rows)
  })*/
})