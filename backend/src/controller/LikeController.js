const Desenvolvedor = require('../model/Desenvolvedor');

module.exports = {
    async store(requisicao, resposta) {
        const { idusuariologado } = requisicao.headers;
        const { idDesenvolvedor } = requisicao.params;

        const desenvolvedorLogado = await Desenvolvedor.findById(idusuariologado);
        const desenvolvedorAlvo = await Desenvolvedor.findById(idDesenvolvedor);    
        console.log("Id usuario logado: " + idusuariologado);
        console.log("Desenvolvedor logado objeto: " + desenvolvedorLogado);
        //Tratativa para caso o desenvolvedor não existir
        if (!desenvolvedorAlvo) return resposta.status(400).json({error: 'Desenvolvedor não existe!'});

        //Validando se já deu match!
        if (desenvolvedorAlvo.likes.includes(desenvolvedorLogado._id)) console.log('DEU MATCH');

        desenvolvedorLogado.likes.push(desenvolvedorAlvo._id);

        await desenvolvedorLogado.save();

        return resposta.json(desenvolvedorLogado);
    }
}