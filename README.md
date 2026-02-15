# Trabalho Prático: Integração de Páginas Web com Banco de Dados (DGT2815)

[cite_start]Este projeto consiste em um ecossistema completo de gerenciamento de livros, integrando um backend NoSQL com três diferentes frameworks front-end (React, Next.js e Angular)[cite: 7, 11]. [cite_start]O objetivo principal é demonstrar a capacidade de consumir uma API unificada através de múltiplas tecnologias[cite: 7].

## 🚀 Estrutura do Projeto

O repositório está organizado da seguinte forma:

- [cite_start]**livros-servidor/**: API Backend desenvolvida com Node.js, Express e Mongoose[cite: 36, 41].
- **clientes/**: Pasta contendo os front-ends:
  - [cite_start]`livros-react`: Interface em React JS[cite: 88, 90].
  - [cite_start]`livros-next`: Interface em Next JS[cite: 88, 115].
  - [cite_start]`livros-angular`: Interface em Angular[cite: 89, 143].

## 🛠️ Tecnologias Utilizadas

- [cite_start]**Banco de Dados**: MongoDB (NoSQL)[cite: 8, 19].
- [cite_start]**Backend**: Node.js, Express, Mongoose e CORS[cite: 36, 41, 42].
- [cite_start]**Front-end**: React, Next.js e Angular[cite: 11].
- [cite_start]**Linguagens**: JavaScript e TypeScript[cite: 10, 129, 137].

## ⚙️ Configuração e Instalação

### 1. Banco de Dados
Certifique-se de que o **MongoDB** está rodando localmente.
- [cite_start]Crie o banco de dados chamado `livraria`[cite: 31].
- [cite_start]Dentro dele, crie a coleção chamada `livros`[cite: 31].

### 2. Backend (livros-servidor)
1. Navegue até a pasta: `cd livros-servidor`.
2. Instale as dependências: `npm install`.
3. [cite_start]Inicie o servidor: `npm start`[cite: 81].
- [cite_start]*O servidor rodará na porta **3030**[cite: 72].*

### 3. Front-ends
Para qualquer um dos projetos na pasta `clientes`:
1. Navegue até a pasta desejada (ex: `cd clientes/livros-react`).
2. Instale as dependências: `npm install`.
3. Inicie a aplicação:
   - [cite_start]React/Next: `npm start` ou `npm run dev`[cite: 114, 138].
   - [cite_start]Angular: `ng serve`[cite: 166].

## 📌 Funcionalidades Implementadas

- [cite_start]**Servidor Express**: Rotas configuradas para operações CRUD (GET, POST, DELETE)[cite: 66, 67, 68].
- [cite_start]**Persistência NoSQL**: Integração direta com MongoDB via Schema do Mongoose[cite: 48, 49].
- [cite_start]**Consumo de API**: Todos os clientes realizam chamadas assíncronas via `fetch` para o backend[cite: 97, 149].
- [cite_start]**Compatibilidade**: IDs tratados como Strings para suportar o padrão `_id` do MongoDB[cite: 91, 144].

---
Projeto desenvolvido como parte da disciplina DGT2815.
