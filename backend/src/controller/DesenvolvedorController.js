const axios = require('axios');
const Desenvolvedor = require('../model/Desenvolvedor');

module.exports = {
    async store(requisicao, resposta) {
        const { usuario } = requisicao.body;

        const desenvolvedorJaEstaCadastrado = await Desenvolvedor.findOne({usuario: usuario});

        if (desenvolvedorJaEstaCadastrado) 
        {
            console.log("Já está cadastrado!");
            return resposta.json(desenvolvedorJaEstaCadastrado);
        }

        const resultado  = await axios.get(`https://api.github.com/users/${usuario}`);
        const { login, bio, avatar_url } = resultado.data;

        const desenvolvedor = await Desenvolvedor.create({
            nome: login,
            usuario : usuario,
            biografia : bio,
            avatar_url
        });

        return resposta.json(desenvolvedor);
    }
};