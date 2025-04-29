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

    mensagens.push(novaMensagem);

    res.status(201).json(novaMensagem);
});

app.get('/mensagens', (req, res) => {
    res.json(mensagens);
});

app.get('/mensagens/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mensagem = mensagens.find(m => m.id === id);

    if (!mensagem) {
        return res.status(404).json({erro: 'mensagem nao encontrada ):'});
    }

    res.json(mensagem);
});

app.put('/mensagens/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mensagem = mensagens.find(m => m.id === id);

    if (!mensagem) {
        return res.status(404).json({erro: 'mensagem nao encontrada ):'});
    }

    mensagem.conteudo = req.body.conteudo;

    res.json({ mensagem: 'mensagem atualizada com sucesso', mensagemAtualizada: mensagem });
});

app.delete('/mensagens/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = mensagens.findIndex(m => m.id === id);

    if (indice === -1) {
        return res.status(404).json({erro: 'mensagem inexistente'});
    }

    mensagens.splice(indice, 1);

    res.json({ mensagem: 'mensagem deletada com sucesso'});
});