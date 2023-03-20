import './styles.css';
import StarFull from '../../assets/star-full.svg';
import StarHalf from '../../assets/star-half.svg';
import StarEmpty from '../../assets/star-empty.svg';

export default function MovieStars() {
    return (
        <div className="jvmovie-stars-container">
            <img src={StarFull} alt="star-full" />
            <img src={StarFull} alt="star-full" />
            <img src={StarFull} alt="star-full" />
            <img src={StarHalf} alt="star-half" />
            <img src={StarEmpty} alt="star-empty" />
        </div>
    )
}