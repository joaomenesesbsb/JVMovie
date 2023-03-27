import { Link } from 'react-router-dom';
import { Movie } from '../../models/movie';
import MovieScore from '../MovieScore';
import './styles.css';

type Props = {
    movie : Movie;
}

export default function Moviecard({movie}: Props) {

    return (
        <div>
            <img className="jvmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="jvmovie-card-bottom-container">
                <h3 className="truncate">{movie.title}</h3>
                <MovieScore score={movie.score} count={movie.count}/>
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary jvmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}