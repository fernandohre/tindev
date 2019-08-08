const {Schema, model} = require('mongoose');

const DesenvolvedorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    usuario: {
        type: String, 
        required: true
    },
    biografia: String,
    avatar: {
        type: String,
        require: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Desenvolvedor'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Desenvolvedor'
    }]
}, {timestamps: true});

module.exports = model('Desenvolvedor', DesenvolvedorSchema);