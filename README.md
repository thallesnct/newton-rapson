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

# React

![image](https://user-images.githubusercontent.com/34549814/67231295-6e16f680-f415-11e9-9799-310fc85f8f99.png)

Clone o repositório, caso não tenha clonado na configuração da API

```bash
  $ git clone https://github.com/thallesnct/newton-rapson.git
```

Navegue até a pasta do projeto

```bash
  $ cd newton-rapson/api
```

Instale as dependências do projeto (utilize o instalador de pacotes de sua preferência)

```bash
  $ yarn
  $ npm install
```

Rode o projeto (utilize o instalador de pacotes de sua preferência)

```bash
  $ yarn start
  $ npm start
```

Agora é possivel visualizar a aplicação em [http://localhost:3000](http://localhost:3000)
