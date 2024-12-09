package com.gabcytn.basic_auth.Repository;

import com.gabcytn.basic_auth.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername (String username);
}
