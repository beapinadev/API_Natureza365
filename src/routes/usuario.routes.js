const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const { auth } = require('../middleware/autenticacao')

const usuarioRoutes = new Router()

usuarioRoutes.post('/', UsuarioController.cadastrarUsuario
    /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Usuário',
                schema: {
                    $email: "teste123@gmail.com",
                    $senha: "teste123",
                    $nome: "Novo Aluno",
                    sexo: "Feminino", 
                    $cpf: "12345678987",
                    $endereco: "Rua Tal, Numero Tal",
                    data_nascimento: "1996-12-15",
                    celular: "48999999999"
            }
        }
    */
)

usuarioRoutes.get('/', auth, UsuarioController.listarTodos
    /*  
        #swagger.tags = ['Usuario']
    */
)

usuarioRoutes.put('/:id', auth, UsuarioController.atualizarUsuario
    /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza um Usuário',
                schema: {
                    $email: "teste123@gmail.com",
                    $senha: "teste123",
                    $nome: "Novo Aluno",
                    sexo: "Feminino", 
                    $cpf: "12345678987",
                    $endereco: "Rua Tal, Numero Tal",
                    data_nascimento: "1996-12-15",
                    celular: "48999999999"
            }
        }
    */
)

usuarioRoutes.delete('/:id', auth, UsuarioController.deletarUsuario
    /*  
        #swagger.tags = ['Usuario']
        
    */
)

module.exports = usuarioRoutes


