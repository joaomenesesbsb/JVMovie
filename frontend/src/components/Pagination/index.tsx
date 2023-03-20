import "./styles.css";
import Arrow from "../../assets/arrow.svg";

export default function Pagination() {
    return (
        <div className="jvmovie-pagination-container">
            <div className="jvmovie-pagination-box">
                <button className="jvmovie-pagination-button" disabled={true} >
                <img src={Arrow} />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="jvmovie-pagination-button" disabled={false} >
                    <img src={Arrow} className="jvmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}