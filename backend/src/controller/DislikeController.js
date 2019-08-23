const Desenvolvedor = require('../model/Desenvolvedor');

module.exports = {
    async store(requisicao, resposta) {
        const { idUsuarioLogado } = requisicao.headers;
        const { idDesenvoldedor } = requisicao.params;

        const desenvolvedorLogado = await Desenvolvedor.findById(idUsuarioLogado);
        const desenvolvedorAlvo = await Desenvolvedor.findById(idDesenvoldedor);    

        //Tratativa para caso o desenvolvedor não existir
        if (!desenvolvedorAlvo) return resposta.status(400).json({error: 'Desenvolvedor não existe!'});

        desenvolvedorLogado.dislikes.push(desenvolvedorAlvo._id);

        await desenvolvedorLogado.save();

        return resposta.json(desenvolvedorLogado);
    }
}