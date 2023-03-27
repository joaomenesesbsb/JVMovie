import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../../../components/movieForm";
import { Movie } from "../../../models/movie";
import * as movieRepository from "../../../repositories/movie-repository"
import "./styles.css";

export default function EvaluationForm() {

    const params = useParams();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        setMovie(movieRepository.findById(Number(params.movieId)));
    }, []);

    return (
    <>
    {
        movie &&
        <MovieForm movie={movie}/>
    }
    </>
    )
}