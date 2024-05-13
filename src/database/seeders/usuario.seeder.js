const Usuario = require("../../models/Usuario");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        try {
            await Usuario.create({
                email: "joao@exemplo.com",
                senha: "joaoemaria",
                nome: "João da Silva",
                sexo: "Masculino",
                cpf: "12345678987",
                endereco: "Rua Tal, Numero Tal",
                data_nascimento: "1990-01-01",
                celular: "91991919090"
            });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    },
    down: async (QueryInterface, Sequelize) => {
        try {
            await Usuario.destroy({
                where: {
                    email: "joao@exemplo.com"
                }
            });
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    }
};