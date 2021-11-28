const { update } = require('../models/funcModels.js');
const Funcionario = require('../models/funcModels.js');

module.exports = {

    async index(req, res) {
        const funcionario = await Funcionario.findAll();
        return res.json(funcionario);
    },

    async store(req, res) {
        const { fun_nome, fun_apelido, fun_sexo, fun_nascimento, dep_codigo } = req.body;
        const funcionario = await Funcionario.create({ fun_nome, fun_apelido, fun_sexo, fun_nascimento, dep_codigo });
        return res.status(200).send({
            status: 1,
            message: "Funcionário cadastrado com sucesso!!!",
            funcionario
        })
    },

    async update(req, res) {
        const { fun_nome, fun_apelido, fun_sexo, fun_nascimento, dep_codigo} = req.body;
        const { codigo } = req.params;

        await Funcionario.update({fun_nome, fun_apelido, fun_sexo, fun_nascimento, dep_codigo}, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionário atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Funcionario.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionário excluído com sucesso!!!",
        })
    }
}