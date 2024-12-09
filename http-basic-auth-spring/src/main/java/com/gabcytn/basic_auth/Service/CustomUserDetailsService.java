package com.gabcytn.basic_auth.Service;

import com.gabcytn.basic_auth.Model.User;
import com.gabcytn.basic_auth.Model.UserPrincipal;
import com.gabcytn.basic_auth.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            System.out.println("User 404 not found");
            throw new UsernameNotFoundException("USER NOT FOUND");
        }

        return new UserPrincipal(user);
    }
}
