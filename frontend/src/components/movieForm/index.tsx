import { Link } from 'react-router-dom';
import { Movie } from '../../models/movie';
import MovieScore from '../MovieScore';
import './styles.css';

type Props = {
    movie : Movie;
}

export default function MovieForm({movie}: Props) {

    function handleSubmit(e : any){
        e.preventDefault();
    }

    return (
        <div className="jvmovie-form-container">
            <img className="jvmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="jvmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="jvmovie-form" onClick={handleSubmit}>
                    <div className="form-group jvmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control form-box" id="email" />
                    </div>
                    <div className="form-group jvmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control form-box" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="jvmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary jvmovie-btn mb-20">Salvar</button>
                    </div>
                </form >
                <Link to={'/'}>
                    <button className="btn btn-primary jvmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}