package com.gabcytn.basic_auth.Controller;

import com.gabcytn.basic_auth.Model.User;
import com.gabcytn.basic_auth.Repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsersController {
    private final UserRepository userRepository;

    public UsersController (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers () {
        return userRepository.findAll();
    }
}
