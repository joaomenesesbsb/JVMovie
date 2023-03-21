package com.jvmeneses.jvmovie.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePK id = new ScorePK();

    private Double note;

    public Score() {
    }

    public Score(Movie movie, User user, Double note) {
        id.setMovie(movie);
        id.setUser(user);
        this.note = note;
    }

    public Movie getMovie(){return id.getMovie();}

    public void setMovie(Movie movie) {id.setMovie(movie);}

    public User getUSer(){return id.getUser();}

    public void setUser(User user) {id.setUser(user);}

    public Double getNote() {
        return note;
    }

    public void setNote(Double note) {
        this.note = note;
    }
}
