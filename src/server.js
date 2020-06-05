const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db")

//Configurando pasta pública
server.use(express.static("public"))

//Habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// Configurar caminhos para a aplicação

// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req,res) => {
  return res.render("index.html")
})

server.get("/create-point", (req,res) => {
  //req.query: Query Strings da url
  //console.log(req.query)



  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
  //req.body: O corpo do nosso formulário
  //console.log(req.body)

  //Inserir dados no banco de dados
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
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items
    ]

    function  afterInsertData(err) {
      if(err) {
        console.log(err)
        return res.send("Erro no cadastro!")
      }
      console.log("Cadastrado com sucesso")
      console.log(this)

      return res.render("create-point.html", {saved: true})
    }
    
    db.run(query, values, afterInsertData)
})

server.get("/search", (req,res) => {
  //Pegar os dados do banco de dados

  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }
    const total = rows.length
    return res.render("search-results.html", {places: rows, total})
  })

  
})


// Ligar o servidor

server.listen(3000)