# API de Mensagens

Este projeto é uma API REST simples para gerenciamento de mensagens, desenvolvida com **Node.js** e **Express**, utilizando o ambiente **GitHub Codespaces** para execução e o **Postman** para testes.

## ✨ Funcionalidades

A API permite realizar as operações básicas de um CRUD:

- **Criar** uma nova mensagem (POST)
- **Listar** todas as mensagens (GET)
- **Obter** uma mensagem por ID (GET)
- **Atualizar** uma mensagem por ID (PUT)
- **Deletar** uma mensagem por ID (DELETE)

---

## ▶️ Como executar no GitHub Codespaces

1. Clone este repositório e abra no **GitHub Codespaces**
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

4. Acesse a URL da porta 3000 gerada pelo Codespaces (ex: `https://seu-codespace-3000.app.github.dev`)

---

## 🔧 Rotas da API

| Método | Endpoint          | Descrição                    |
|--------|-------------------|------------------------------|
| POST   | /mensagens        | Cria uma nova mensagem       |
| GET    | /mensagens        | Lista todas as mensagens     |
| GET    | /mensagens/:id    | Retorna uma mensagem por ID  |
| PUT    | /mensagens/:id    | Atualiza uma mensagem por ID |
| DELETE | /mensagens/:id    | Remove uma mensagem por ID   |

---

## 🧪 Testes no Postman

- Uma coleção do Postman foi criada e exportada no arquivo:  
  `api-mensagens.postman_collection.json`

- Configure a variável de ambiente `base_url` no Postman com o endereço da sua API no Codespaces.

---

## 🛠️ Tecnologias

- Node.js
- Express
- Postman
- GitHub Codespaces

---

## 📁 Arquivos entregues

- Código-fonte completo neste repositório
- Arquivo `.json` da coleção Postman incluído no repositório

---

