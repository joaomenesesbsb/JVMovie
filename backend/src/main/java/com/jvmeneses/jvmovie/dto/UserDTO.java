package com.jvmeneses.jvmovie.dto;

import com.jvmeneses.jvmovie.entities.Score;
import com.jvmeneses.jvmovie.entities.User;
import jakarta.persistence.OneToMany;

import java.util.HashSet;
import java.util.Set;


public class UserDTO {

    private Long id;
    private String email;

    public UserDTO() {
    }

    public UserDTO(Long id, String email) {
        this.id = id;
        this.email = email;
    }

    public UserDTO(User entity) {
        id = entity.getId();
        email = entity.getEmail();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
