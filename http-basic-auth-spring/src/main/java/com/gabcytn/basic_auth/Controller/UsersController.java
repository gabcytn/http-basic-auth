package com.gabcytn.basic_auth.Controller;

import com.gabcytn.basic_auth.Model.User;
import com.gabcytn.basic_auth.Service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UsersController {
    private final UserService userService;

    public UsersController (UserService userService) {
        this.userService = userService;
    }

    // for CORS testing purposes, allowed to all unauthenticated users
    @GetMapping("/public")
    public List<User> publicRoute () {
        return List.of(new User());
    }

    @GetMapping("/users")
    public List<User> getAllUsers () {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public List<Optional<User>> getUserById (@PathVariable int id) {
        return List.of(userService.getUserById(id));
    }

    @PostMapping("/register")
    public Optional<User> createUser (@RequestBody User user) {
        return userService.createUser(user);
    }
}
