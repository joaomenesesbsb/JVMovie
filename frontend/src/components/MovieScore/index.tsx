import './styles.css';
import MovieStars from '../MovieStars';

type Props = {
    score : number;
    count : number;
}

export default function MovieScore({score, count}: Props) {
    return (
        <div className="jvmovie-score-container">
            <p className="jvmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="jvmovie-score-count">{count} avaliações</p>
        </div>
    )
}