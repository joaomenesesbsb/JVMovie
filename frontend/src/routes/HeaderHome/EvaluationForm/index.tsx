import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../../../components/MovieForm";
import { Movie } from "../../../models/movie";
import * as movieService from "../../../services/movie-service"
import * as userService from "../../../services/user-service";
import * as lsService from "../../../services/ls-service";
import "./styles.css";
import { SCORE_KEY, USER_KEY } from "../../../utils/system";

export default function EvaluationForm() {

    const params = useParams();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        if(lsService.exist(USER_KEY)){
            userService.saveUsers();
        }
        setMovie(movieService.findById(Number(params.movieId)));
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