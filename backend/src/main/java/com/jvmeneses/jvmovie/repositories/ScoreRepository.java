package com.jvmeneses.jvmovie.repositories;

import com.jvmeneses.jvmovie.entities.Score;
import com.jvmeneses.jvmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
