import React, { useEffect, useState } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { Movie } from '../../models/movie';
import { Score } from '../../models/score';
import * as movieService from "../../services/movie-service";
import './styles.css';

type Props = {
    movie: Movie;
}

export default function MovieForm({ movie }: Props) {

    const [newScore, setNewScore] = useState<Score>({
        email: '',
        score: 0
    });



    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(movie, newScore);
        const updatedMovie: Movie = { ...movie };

        const email = (e.target as HTMLFormElement).email.value;
        const score = (e.target as HTMLFormElement).score.value;
        if (email !== '' && score !== 0 ) {
            updatedMovie.scores.push({ "email": email, "score": parseInt(score) });
            setNewScore({...newScore, email: email, score: score})
            movieService.newScore(movie,newScore);
        } else {
            console.log("Informe um email e uma avaliação válidos"); 
        }
    }


    return (
        <div className="jvmovie-form-container">
            <img className="jvmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="jvmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="jvmovie-form" onSubmit={handleSubmit}>
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