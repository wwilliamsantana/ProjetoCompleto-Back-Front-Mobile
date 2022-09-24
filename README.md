# NLW eSports -> Web, Mobile (Back-end, Front-end)

<div align="center">
  <br>
  <img alt="RocketNews" width="200px"  src="https://github.com/wwilliamsantana/ProjetoCompleto-Back-Front-Mobile/blob/main/web/src/assets/logo-nlw.svg" />
  <br>
</div>

## :computer: Sobre

Projeto desenvolvido durante o evento NLW proporcionado pela RocketSeat. Onde criamos todo Back-end, Front-end e Mobile de uma aplicação com tema eSport.

- Server API (back-end)
  - Possuímos 4 rotas:
      - Criação de um anúncio.
      - Busca pelos games disponíveis.
      - Busca dos anúncios disponíveis de acordo o Game(id).
      - Busca discord por Id do anúncio.
  - Possui 2° tabelas: Game e Ad (Anúncios).
    
 - Web (Front-end)
     - Está consumindo os dados da nossa API -> Como os Card's dos games + Quantidade de anúncios feito naquele Game.
     - É possível fazermos uma publicação de anúncio. (Enviando os dados para nossa API).
     
 - Mobile
    - Consumindo os dados da API -> Onde é feito um carrossel com os Games disponíveis -> Mostrando a quantidade de anúncios em cada.
    - Ao clicar em um card de Game entramos na página que possui a listagem de anúncios daquele determinado Game em formato de Carrosel.
    - Loanding ao entrar na página.
    

## :rocket: Techs

- Server (Back-end)
  - Node.js + TypeScript
  - Prisma (Gerenciamento do Banco de dados)
  - SQLite 
  - ts-node-dev (Reloading da aplicação)
  - Express (Servidor)
  - Cors (CORS Web)
 
 - Web (Front-end)
   - React + TypeScript
   - Vite (Ambiente de desenvolvimento)
   - Tailwindcss (Estilização)
   - Axios (Conexão com back-end)
   - Radix Ui (Soluções prontas) + Phosphor-react (Icons)
 
 - Mobile
    - React-native + TypeScript
    - Expo (Permite o fácil acesso às API’s nativas do dispositivo)
    - Phosphor-react-native  (Icons)
    - React-Navigation
    - Diversas módulos do expo (font, linear-gradient, clipboard, status-bar)
    - Alguns módulos do próprio react-native (safe-area-context, screens, svg, web) 


## Modo de usar

#### Server
  ```
    npm install    //Instalar todas as dependências
    npm run dev   //Iniciar a aplicação do server
  ```
  
#### Web
  ```
    npm install    //Instalar todas as dependências
    npm run dev   //Iniciar a aplicação do server
  ```
  
#### Mobile
  ```
    npm install -g expo-cli  //Iremos precisar do expo instalado!
    npm install    //Instalar todas as dependências.
    expo start     //Iniciar nossa Aplicação, será gerado um QRCode -> Onde podemos acessar nossa aplicação (Possuir o Expo GO -> Aplicativo no aparelho celular)
    
  ```
 
 #### Ambas aplicações -> Web + Mobile -> Necessitam do Back-end Rodando..


## Layout

<div align="center">
    <h3>*Web</h3>
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192076467-56ecf420-e09a-4860-943c-1fb168c759f5.png" width="80%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192076545-da68c611-2edc-4d86-b782-0139fef9f43b.png" width="80%">

</div>

<hr>

<div align="center">
    <h3>*Mobile</h3>
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192077241-3c03d73d-a6dd-4fb5-b47e-baa50b3455a7.jpeg" width="16%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192077242-db2429ff-70ff-44d8-9876-eafced450dee.jpeg" width="16%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192077239-05eef287-c619-46cb-9753-0a9529e5d765.jpeg" width="16%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192077238-1760b7df-4a73-4d54-96ae-70f9a8b0aae3.jpeg" width="16%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192077329-b91194d3-64f4-4569-9be9-186f8f6440d4.jpeg" width="16%">
 

</div>


<hr>

<div align="center">
    <h3>*Server (Insomnia -> Requisições)</h3>
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192075660-c2f7647f-01c7-42ae-bd3f-4725ec1494a2.png" width="70%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192075657-bf51476b-d214-4383-85a2-76e0735d9851.png" width="70%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192075659-7a6d9ea5-8d0e-4681-984e-2b48c8c0de63.png" width="70%">
  <img alt="" src="https://user-images.githubusercontent.com/84254929/192075655-cc1b6ba2-d162-4d7e-829d-9c8b05d45c6b.png" width="70%">
</div>



