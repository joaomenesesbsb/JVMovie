package com.jvmeneses.jvmovie.dto;

import com.jvmeneses.jvmovie.entities.Score;

public class ScoreDTO {

    private Long movieId;
    private String nameMovie;
    private String userEmail;
    private Double note;

    public ScoreDTO() {
    }

    public ScoreDTO(Long movieId, String nameMovie, String userEmail, Double note) {
        this.movieId = movieId;
        this.nameMovie = nameMovie;
        this.userEmail = userEmail;
        this.note = note;
    }
    public ScoreDTO(Score entity) {
        movieId = entity.getMovie().getId();
        nameMovie = entity.getMovie().getTitle();
        userEmail = entity.getUSer().getEmail();
        note = entity.getNote();
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getNameMovie() {
        return nameMovie;
    }

    public void setNameMovie(String nameMovie) {
        this.nameMovie = nameMovie;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Double getNote() {
        return note;
    }

    public void setNote(Double note) {
        this.note = note;
    }
}
