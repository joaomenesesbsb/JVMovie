package com.jvmeneses.jvmovie.controllers;

import com.jvmeneses.jvmovie.dto.MovieDTO;
import com.jvmeneses.jvmovie.dto.ScoreDTO;
import com.jvmeneses.jvmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO score){
        return service.saveScore(score);
    }
}
