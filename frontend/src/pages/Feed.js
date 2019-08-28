import React, {useEffect, useState} from 'react';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import './Feed.css';
import logoGithub from '../assets/logo-github.png'
import api from '../services/api';

export default function Feed({ match }) {

    const [desenvolvedores, setDesenvolvedores] = useState([]);

    useEffect(() => {
        async function carregarDesenvolvedores() {
            
            const resposta = await api.get('/devs', {
                headers: {
                    usuario: match.params.id,
                }
            });
            console.log(resposta.data); 
            setDesenvolvedores(resposta.data);
        }

        carregarDesenvolvedores();
    }, [match.params.id]);

    return(

        <div className="feed-container">
            <img src={logoGithub} alt="Tindev" />
            <ul>
                {
                    desenvolvedores.map(dev => (
                        <li key={dev._id}>
                            <img src={dev.avatar} alt={dev.nome} />
                            <footer>
                                <strong>{dev.nome}}</strong>
                                <p>{dev.biografia}}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button">
                                    <img src={dislike} alt="Dislike"/>
                                </button>

                                <button type="button">
                                    <img src={like} alt="Like"/>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}