const express = require('express');
const app = express();

app.use(express.json());

let mensagens = [];
let proximoId = 1;

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// criando rotas:

app.post('/mensagens', (req, res) => {
    const { conteudo } = req.body;

    if(!conteudo) {
        return res.status(400).json({error: 'O campo conteudo é obrigatório'});
    }

    const novaMensagem = {
        id: proximoId++,
        conteudo
    };

    novaMensagem.push(novaMensagem);

    res.status(201).json(novaMensagem);
});