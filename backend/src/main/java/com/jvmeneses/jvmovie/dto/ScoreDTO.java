package com.jvmeneses.jvmovie.dto;

import com.jvmeneses.jvmovie.entities.Score;

public class ScoreDTO {

    private Long movieId;
    private String email;
    private Double note;

    public ScoreDTO() {
    }

    public ScoreDTO(Score entity) {
        movieId = entity.getMovie().getId();
        email = entity.getUSer().getEmail();
        note = entity.getNote();
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getNote() {
        return note;
    }

    public void setNote(Double note) {
        this.note = note;
    }
}
