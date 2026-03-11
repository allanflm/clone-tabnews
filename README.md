# 📰 Clone TabNews

Uma implementação do [tabnews.com.br](https://www.tabnews.com.br) — uma plataforma de conteúdo para pessoas da área de tecnologia.

🔗 **Demo ao vivo:** [clone-tabnews-tau-kohl.vercel.app](https://clone-tabnews-tau-kohl.vercel.app)

---

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) — Framework React para aplicações web
- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [Docker](https://www.docker.com/) — Containerização do ambiente de desenvolvimento
- [Vercel](https://vercel.com/) — Plataforma de deploy

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada no `.nvmrc`)
- [Docker](https://www.docker.com/) e Docker Compose
- [Git](https://git-scm.com/)

---

## ⚙️ Instalação e uso

### 1. Clone o repositório

```bash
git clone https://github.com/allanflm/clone-tabnews.git
cd clone-tabnews
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com base no `.env.development`:

```bash
cp .env.development .env.local
```

### 4. Suba o banco de dados com Docker

```bash
docker compose up -d
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🧪 Testes

Para rodar os testes de integração:

```bash
npm test
```

---

## 📁 Estrutura do projeto

```
clone-tabnews/
├── infra/          # Configurações de infraestrutura (Docker, banco de dados)
├── pages/          # Páginas e rotas da API (Next.js)
│   └── api/        # Endpoints da API REST
├── tests/          # Testes de integração
└── .env.development # Variáveis de ambiente para desenvolvimento
```

---

## 🌐 Deploy

O projeto está configurado para deploy automático na [Vercel](https://vercel.com/). Cada push na branch `main` aciona um novo deploy.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo, seguindo o curso [curso.dev](https://curso.dev).

---

<p align="center">Feito com ❤️ por <a href="https://github.com/allanflm">allanflm</a></p>
