const Depto = require('../models/deptoModels');

module.exports = {
    
    async index(req, res) {
        const deptos = await Depto.findAll();
        return res.json(deptos);
    },

    async store(req, res) {
        const { dep_descricao, dep_responsavel, dep_ramal } = req.body;
        const deptos = await Depto.create({ dep_descricao, dep_responsavel, dep_ramal});
        return res.status(200).send({
            status: 1,
            message: "Departamento cadastrado com sucesso!!!",
            deptos
        })
    },

    async update(req, res) {
        const { dep_descricao, dep_responsavel, dep_ramal } = req.body;
        const { codigo } = req.params;

        await Depto.update({ dep_descricao, dep_responsavel, dep_ramal}, 
            { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Departamento atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Depto.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Departamento excluído com sucesso!!!",
        })
    }
}