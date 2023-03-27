import { Movie } from "../models/movie";
import * as movieRepository from "../localStorage/movie-repository";

export function findById(id :number): Movie| undefined{
    return movieRepository.findById(id);
}

export function saveMovies(){
    return movieRepository.save();
}

export function getMovies(){
    return movieRepository.get();
}

export function exist(key :string): boolean{
    return movieRepository.exist(key);
}

export function filterMovies(searchTerm: string): Movie[] {
    return movieRepository.filterMovies(searchTerm);
}