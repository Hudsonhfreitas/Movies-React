import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="container">
            <Link className="logo" to="/">MOVIES</Link>
            <Link className="favoritos" to="/favoritos">Salvos</Link>
        </div>
    </header>
    );
}