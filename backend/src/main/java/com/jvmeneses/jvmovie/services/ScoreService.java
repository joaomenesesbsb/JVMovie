package com.jvmeneses.jvmovie.services;

import com.jvmeneses.jvmovie.dto.MovieDTO;
import com.jvmeneses.jvmovie.dto.ScoreDTO;
import com.jvmeneses.jvmovie.entities.Movie;
import com.jvmeneses.jvmovie.entities.Score;
import com.jvmeneses.jvmovie.entities.User;
import com.jvmeneses.jvmovie.repositories.MovieRepository;
import com.jvmeneses.jvmovie.repositories.ScoreRepository;
import com.jvmeneses.jvmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto){
        User user = userRepository.findByEmail(dto.getEmail());
        if (user == null){
            user = new User();
            user.setEmail(dto.getEmail());
            userRepository.saveAndFlush(user);
        }
        Movie movie = movieRepository.findById(dto.getMovieId()).get();

        Score score = new Score();
        score.setUser(user);
        score.setMovie(movie);
        score.setNote(dto.getNote());
        scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : movie.getScores()){
            sum =+ s.getNote();
        }
        movie.setScore(sum / movie.getScores().size());
        movie.setCount(movie.getScores().size());
        movieRepository.saveAndFlush(movie);
        
        return new MovieDTO(movie);
    }



}
