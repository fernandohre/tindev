const axios = require('axios');
const Desenvolvedor = require('../model/Desenvolvedor');

module.exports = {

    async consultar(requisicao, resposta) {
        const { idusuariologado } = requisicao.headers;

        const usuarioLogado = await Desenvolvedor.findById(idusuariologado);

        //Buscando usuários que não seja igual ao usuário logado
        //Não esteja entre aqueles que já receberam likes
        //Não esteje entre aquele que já receberam dislikes
        const usuarios = await Desenvolvedor.find({
            $and: [
                { 
                    _id: { $ne: idusuariologado } 
                },
                { 
                    _id: { $nin: usuarioLogado.likes } 
                },
                { 
                    _id: { $nin: usuarioLogado.dislikes } 
                },
            ]
        })

        return resposta.json(usuarios);
    },
     
    async store(requisicao, resposta) {
        const { usuario } = requisicao.body;

        const desenvolvedorJaEstaCadastrado = await Desenvolvedor.findOne({usuario: usuario});

        if (desenvolvedorJaEstaCadastrado) 
        {
            console.log("Já está cadastrado!");
            return resposta.json(desenvolvedorJaEstaCadastrado);
        }

        const resultado  = await axios.get(`https://api.github.com/users/${usuario}`);
        const {name, bio, avatar_url } = resultado.data;

        try {
            const desenvolvedor = await Desenvolvedor.create({
                nome: name === null || name === 'undefined' || name == "" ? usuario : name,
                usuario : usuario,
                biografia : bio,
                avatar: avatar_url
            });

            return resposta.json(desenvolvedor);
        }
        catch(err) {
            console.log(err);
        }
    }
};