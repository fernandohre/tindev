import React, {useState} from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login( { history } ) {
    const [usuario, setUsuario] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            usuario: usuario
        });
        
        const { _id } = response.data;
        
        history.push(`/devs/${_id}`);
    }
    
    return(

        <div className="login-container">

            <form onSubmit={handleSubmit}>
                <img className="imagem-padrao" src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário do Github!"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>
    );
}
