package com.gabcytn.basic_auth.Service;

import com.gabcytn.basic_auth.Model.User;
import com.gabcytn.basic_auth.Repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    public UserService (UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.encoder = bCryptPasswordEncoder;
    }

    public List<User> getAllUsers () {
        return userRepository.findAll();
    }

    public Optional<User> getUserById (int id) {
        return userRepository.findById(id);
    }

    public Optional<User> createUser (User user) {
        String hashedPassword = encoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepository.save(user);
        return userRepository.findById(user.getId());
    }
}
