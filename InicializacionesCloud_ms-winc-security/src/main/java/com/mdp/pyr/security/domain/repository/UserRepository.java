package com.mdp.pyr.security.domain.repository;

import com.mdp.pyr.security.domain.model.entity.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends ReactiveMongoRepository<User, Integer> {
}
