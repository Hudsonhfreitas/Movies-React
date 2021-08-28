import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';

export default function Favoritos() {

    const[filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []) ;

    }, []);

    function handleDelete(id) {
        let filtroFilmes = filmes.filter(filme => {
            return (filme.id !== id );
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes',JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso!')
    };

    return(
        <div className="meus-filmes">
            <div className="container">
                <h1>Meus filmes</h1>

                {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

                <ul>
                    {filmes.map((filme) => (
                        <li key={filme.id}>
                            <h3>{filme.nome}</h3>
                            <span>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleDelete(filme.id)}>Excluir</button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}