const Usuario = require("../../models/Usuario");
const Local = require("../../models/Local");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        try {
            const usuario = await Usuario.findOne({ where: { email: "joao@exemplo.com" } });

            if (!usuario) {
                console.error("Usuário não encontrado.");
                return;
            }

            await Local.bulkCreate([
                {
                    nome: "Praia do Campeche",
                    cep: "88063000",
                    latitude: "-27.680399008333332", 
                    longitude: "-48.49422400833333",
                    localidade: "88063-000, Campeche, Florianópolis, Região Geográfica Imediata de Florianópolis, Região Geográfica Intermediária de Florianópolis, Santa Catarina, Região Sul, Brasil",
                    descricao: "Lindo local!",
                    usuarioId: usuario.id
                },
                {
                    nome: "Praia do Pântano",
                    cep: "88067079",
                    latitude: "-27.7790083", 
                    longitude: "-48.506409",
                    localidade: "88067-079, Pântano do Sul, Florianópolis, Região Geográfica Imediata de Florianópolis, Região Geográfica Intermediária de Florianópolis, Santa Catarina, Região Sul, Brasil",
                    descricao: "Lugar agradável",
                    usuarioId: usuario.id
                }
            ]);
        } catch (error) {
            console.error("Erro ao criar locais:", error);
        }
    },
    down: async (QueryInterface, Sequelize) => {
        try {
            await Local.destroy({
                where: {
                    cep: ["88063000", "88067079"]
                }
            });
        } catch (error) {
            console.error("Erro ao excluir locais:", error);
        }
    }
};


