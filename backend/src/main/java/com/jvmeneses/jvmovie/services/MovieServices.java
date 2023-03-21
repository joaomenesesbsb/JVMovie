package com.jvmeneses.jvmovie.services;

import com.jvmeneses.jvmovie.dto.MovieDTO;
import com.jvmeneses.jvmovie.entities.Movie;
import com.jvmeneses.jvmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieServices {

    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
       public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> result = repository.findAll(pageable);
        return result.map(x -> new MovieDTO(x));
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Movie movie = repository.findById(id).get();
        return new MovieDTO(movie);
    }
}
