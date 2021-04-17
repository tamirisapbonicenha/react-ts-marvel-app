# Aplicação React | Marvel API

Aplicação React que consome a API Rest da Marvel, mostra todos os personagens e os seriados que atuaram no universo da Marvel.

Link: https://react-ts-marvel-app.netlify.app/

## Stack

- Create React App
- React
- React Router
- RTL
- Material-ui

## Requisitos

Node.js

Yarn

Chave pública e privada gerada na API da Marvel

Ps: Para mais informações de como consegui-lá, siga [essas instruções](https://developer.marvel.com/documentation/getting_started). Também é necessário autorizar o domínio de desenvolvimento para realizar requests a API.

## Instalação

Clone o projeto

Instale as dependêncis: `yarn install`

Use como base o arquivo .env.example para criar um arquivo com o nome .env na raiz do projeto

`REACT_APP_MARVEL_PUBLIC_KEY=yourpublickey`

`REACT_APP_MARVEL_PRIVATE_KEY=yourprivatekey`

Rode o projeto em modo de desenvolvimento
`yarn start`

### TODO

- Escrever mais testes\*\*
- Paginar os seriados na página de detalhes.
- Melhorar a página de NotFound.
- Typeahead na busca.
- Separar responsabilidades dos loadings state do fetch de personagens e séries.
- Setar e recuperar dados do localStorage para atualizar os dados do personagens na página de detalhe.
- Extrair componente do form de edição na página de detalhe.
