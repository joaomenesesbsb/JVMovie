import { Movie } from "../models/movie";
import * as movieRepository from "../localStorage/movie-repository";
import { Score } from "../models/score";

export function findById(id :number): Movie| undefined{
    return movieRepository.findById(id);
}

export function saveMovies(){
    return movieRepository.save();
}

export function getMovies(){
    return movieRepository.get();
}

export function newScore(movie: Movie, newScore: Score){
    movieRepository.newScore(movie, newScore);
}


export function filterMovies(searchTerm: string): Movie[] {
    return movieRepository.filterMovies(searchTerm);
}