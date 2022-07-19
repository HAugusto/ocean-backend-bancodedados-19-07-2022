const express = require('express')  // Cria uma aplicação em Express
const app = express()   // Executa minha aplicação Express

// Registrar que estamos usando JSON no body da requisição
app.use(express.json());

// Cria um "Endpoint" para rodar uma função
// quando chegar uma requisição
app.get('/', function(req, res) {
  res.send('Hello, World');
});

// Endpoint /oi "Hello, World"
app.get('/oi', function(req, res){
    res.send("Olá, Mundo");
});

// Endpoint de Heróis
const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//               0                   1                2

// [GET] /herois -> Read All (Ler tudo)
app.get("/herois", function(req, res){
    // Enviar os heróis - Filtra por boolean
    res.send(herois.filter(Boolean));
});

// [GET] /herois/:id -> Read by ID (Ler pelo ID)
app.get("/herois/:id", function(req, res){
    // Pegamos o ID pela rota
    const id = req.params.id;

    // Acessar o registro na lista, usando o ID
    const item = herois[id - 1];

    res.send(item);
});

// [POST] /herois - Create (Criar)
app.post("/herois", function(req, res){
    console.log(req.body)
    
    // Acessando o valor nome enviado na requisição
    const item = req.body.nome;
    
    // Inserindo o valor na lista
    herois.push(item);

    // Exibe uma mensagem de sucesso
    res.send("Item criado com sucesso");
});

// [PUT] /herois/:id -> Update (Atualizar)
app.put("/herois/:id", function(req, res){
    // Pegar o ID
    const id =  req.params.id;

    // Pegar o item a ser atualizado
    const item = req.body.nome;

    // Atualizar na lista o valor recebido
    herois[id - 1] = item;

    
    res.send("Item atualizado com sucesso");
});

// [DELETE] /herois/:id -> Delete (Remover)
app.delete("/herois/:id", function(req, res){
    // Pegar o ID
    const id = req.params.id;
    
    // Remove o item da lista
    delete herois[id - 1];

    // Exibe uma mensagem de sucesso
    res.send("Item removido com sucesso!");
});

// Confirma que está rodando
app.listen(3000, function(){
    console.log("Aplicação rodando em http://localhost:3000");
});