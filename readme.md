# API Natureza365

- Sobre o projeto: 

Seja bem-vindo a API Natureza365! Este arquivo README fornece informações sobre a estrutura do projeto, como executá-lo localmente e outras informações relevantes.

A API Natureza365 é uma ferramenta poderosa para cadastrar e gerenciar locais de interesse na natureza, como trilhas, cachoeiras e praias. Com ela, você pode facilmente adicionar novos locais, atualizar informações existentes e remover locais da sua conta. Para enriquecer os dados, integramos a API OpenStreetMap, que fornece informações detalhadas de localização com base no CEP inserido.

Esse projeto foi desenvolvido em Javascript, utilizando ferramentas como Node.js, PostgreSQL e Sequelize.

# Funcionalidades Principais:

- Cadastre novos locais de interesse na natureza.
- Atualize e gerencie as informações dos locais cadastrados.
- Utilize a API OpenStreetMap para obter detalhes de localização com base no CEP.

## Como rodar o repositório:

1. Na primeira vez é necessário instalar as dependencias:
    `npm install`,
    Se for em ambiente local: 
    `npm install --dev`,

2. Definir configurações de ambiente a partir do exemplo presente no código:
    `cp .env_example .env`

3. Rodar o repositório em ambiente local:
    `npm run start:dev`

## Rodando as migrations:

1. Como rodar uma migration.
    Opção nº 1: `sequelize db:migrate`
    Opção nº 2: `npx sequelize db:migrate`

2. Como reverter a última migration:
    Opção nº 1:`sequelize-cli db:migrate:undo`
    Opção nº 1:`npx sequelize-cli db:migrate:undo`

## Rodando os seeders:

-  Rodar primeiro seed de Usuário, depois de Local
    1. `sequelize db:seed --seed usuario.seeder.js`
    2. `sequelize db:seed --seed local.seeder.js`

# Criar o documento do Swagger.json usando o AutoGen:
`npm run swagger`

## Instalação de bibliotecas:

1. Sequelize:
    `npm install sequelize`,
2. Sequelize CLI
    `npm install -g sequelize-cli`,
3. Dotenv
    `npm install dotenv`,
4. JWT Web Token:
    `npm install jsonwebtoken`,
5. YUP:
    `npm install --save yup`
6. Axios:
    `npm install axios`
7. Swagger UI:
    `npm install swagger-ui-express`
8. Swagger AutoGen para gerar o documento Swagger automaticamente
    `npm install swagger-autogen`


## ROTAS:

- Rota de Documentação do projeto (Swagger): http://localhost:3000/docs

# Rotas sem autenticação:

1. POST /usuario
Nessa rota o usuário vai poder se cadastrar na plataforma.
2. POST /login
Nessa rota o usuário irá fazer login, e receber um token para autenticação.

# Rotas para Usuários Autenticados:

3. POST /local
Nesta rota o usuário cadastra um local em sua conta.
4. GET /local
Nesta rota o usuário lista os locais cadastrados em sua conta.
5. GET /local/:local_Id
Nessa rota o usuário pode visualizar um local que foi cadastrado em sua conta através do ID do local.
6. GET /local/:local_Id/maps
Nessa rota o usuário tem acesso a um link do Google Maps referente ao local que já foi cadastrado, através do seu ID.
7. PUT /local/:local_Id
Nesta rota o usuário atualiza um local cadastrado em sua conta através do ID.
8. DELETE /local/:local_Id
Nesta rota o usuário exclui um local cadastrado em sua conta, através do ID.

# Rotas criadas com finalidade de teste:

9. GET /usuario
10. PUT /usuario           
11. DELETE /usuario


## Link para API Externa - OpenStreetMap:
https://nominatim.openstreetmap.org/ui/search.html


## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/
## Documentação YUP:
https://docs.npmjs.com/
## Documentação Swagger:
https://swagger.io/docs/


## ESTRUTURAÇÃO DO CÓDIGO:

    Organizei o código dividindo ele em partes menores.
    Você vai encontrar as seguintes pastas navegando pelo projeto:

1. Controllers:
Pasta em que está toda a lógica das rotas por trás da API, dividida em LoginController, UsuarioController e LocalController.
2. Migrations:
Pasta de criação e alteração de tabelas. 
3. Seeders:
Pasta com os dados de usuarios e locais inseridos para teste do código.
3. Models:
Modelos das tabelas criadas divididas em Usuario.js e Local.js
4. Middleware:
Pasta em que criei funções de autenticação e validação.
5. Routes:
Pasta em que se encontram os arquivos de rota, onde os controllers são importados.

## CONSIDERAÇÕES FINAIS - PROPOSTAS DE MELHORIA

1. Melhorar algumas lógicas que se repetem no código.
2. Personalizar melhor a mensagem dos erros, para facilitar o encontro dele.
3. Adotar o uso de spread, para que ao atualizar um local, ou o próprio cadastro, o usuário não precise preencher todos os campos novamente.
4. Melhorar as condições de validação, como senhas mais fortes. Ex.: a senha deve ter no mínimo 8 caracteres, sendo eles uma letra maiuscula, um número e um caractere especial.







qual o objetivo do sistema?
meu sistema tem como objetivo 