import { Movie } from "../models/movie";
import * as movieRepository from "../repositories/movie-repository";

export function findAll() :Movie[]{
    return movieRepository.findAll();
}

export function findById(id :number): Movie| undefined{
    return movieRepository.findById(id);
}

export function filterList(searchTerm: string): Movie[] {
    return movieRepository.filterList(searchTerm);
}