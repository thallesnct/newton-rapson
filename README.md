# Aproximação de Raízes

Esse repositório contém uma API e uma aplicação em React demonstrando a utilização da API

# API

A API realiza o calculo de aproximação de raizes em um intervalo **[a, b]** utilizando o método de Newton-Rapson

## Guia de Instalação

Clone o repositório

```bash
  $ git clone https://github.com/thallesnct/newton-rapson.git
  $ cd newton-rapson/api
```

Inicie o ambiente virtual

```bash
  $ python3 -m venv env
  $ source env/bin/activate
```

Instale as dependências do projeto

```bash
  $ python3 -m pip install -r dependencies.txt
```

Defina o arquivo para o Flask rodar

```bash
  $ FLASK_APP=app.py
```

Rode o projeto

```bash
  $ flask run
```

Agora é possivel acessar a API pela rota [http://localhost:5000](http://localhost:5000)
