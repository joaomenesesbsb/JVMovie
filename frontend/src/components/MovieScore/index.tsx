import './styles.css';
import MovieStars from '../MovieStars';

export default function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="jvmovie-score-container">
            <p className="jvmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="jvmovie-score-count">{count} avaliações</p>
        </div>
    )
}