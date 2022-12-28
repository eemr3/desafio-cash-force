# Cashforce

Desafio proposto para desenvolver uma API que retorna informações de transação financeira e APP Web para visualizar esses dados retornado pela API.

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v16.x (foi usado a versão 16.18.1)
- MySQL
- Docoker/docker-compose (recomendado)

## Rodando localmente

Clone o projeto

```bash
git clone git@github.com:eemr3/desafio-cash-force.git
```

Entre no diretório do projeto

```bash
cd desafio-cash-force
```

Instale as dependências

```bash
npm install
```

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar seguir as intruções abaixo:

### Entre na pasta `server`:

```bash
cd server
```

- Dentro da pasta `server` renomei o arquivo `.env.exemple` para `.env`, ele contem os valores para a configuração do banco de dados.

### Subir o container com o Banco de Dados

Volte a pasata raiz do projeto `/desafio-cash-force`

- Voltando para a pasta `/desafio-cash-force`

```bash
cd ..
```

Use os seguintes comandos no terminal:

Para cria o container com o BD MySQL:

```bash
npm run compose:up

```

Aguarde um instante até o container está de pé e a conexão com BD está pronta e use o comando abaixo para criar as tabelas e popular as mesmas:

```bash
npm run database
```

## Subir o servidor

### Entre na pasta `server`:

```bash
  cd server
```

Para rodar o back-end digite o comando:

```bash
npm run dev
```

## Subir o App Web

## Entre no diretório do `web`

```bash
  cd web
```

Dentro da pasta `web` digite o comando:

```bash
npm run serve
```

Obs: O back-end deve estar rodando para o front-end funcionar!

## Informção do Front-end da aplicação

- [Front-End](https://github.com/eemr3/desafio-cash-force/tree/main/web)

## Informção do Back-end da aplicação

- [Back-End](https://github.com/eemr3/desafio-cash-force/tree/main/server)

## Autor

- [@eemr3](https://www.github.com/eemr3)
