import { Link } from 'react-router-dom';
import MovieScore from '../MovieScore';
import './styles.css';

export default function Moviecard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="jvmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="jvmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary jvmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}