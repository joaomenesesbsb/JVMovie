import { useEffect, useState } from "react";
import Moviecard from "../../../components/MovieCard";
import Pagination from "../../../components/Pagination";
import SearchBar from "../../../components/searchBar";
import { Movie } from "../../../models/movie";
import * as movieService from "../../../services/movie-service";
import "./styles.css";

type QueryParams ={
    name: string
}

export default function Listing() {

    const [movies, setMovies] = useState<Movie[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        name : ''
    });

    useEffect(() => {
            setMovies(movieService.filterList(queryParams.name));
    },[queryParams]);

    function handleSearch(text: string){
        setMovies([]);
        setQueryParams({...queryParams, name: text});
    }

    return (
        <main className="container mb-20 mt-20">
            <SearchBar onSearch={handleSearch}/>
            <div className="jv-movie-cards">
                {
                   movies.map(movie => <Moviecard key={movie.id} movie={movie} />)
                }
            </div>
        </ main>
    )
}