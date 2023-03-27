import './styles.css';
import StarFull from '../../assets/star-full.svg';
import StarHalf from '../../assets/star-half.svg';
import StarEmpty from '../../assets/star-empty.svg';

type Props = {
    score : number;
}

type StarProps = {
    fill : number;
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

function Star({fill} : StarProps){
    if(fill === 0){
        return  <img src={StarEmpty} />
    }
    else 
    if (fill === 0.5){
        return <img src={StarHalf} />
    }
    else return <img src={StarFull} />
}

export default function MovieStars({score}: Props) {

    const fills = getFills(score);

    return (
        <div className="jvmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    )
}