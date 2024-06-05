package com.lazerneek123.backend.model.persistence.repository;

import com.lazerneek123.backend.model.persistence.entity.Person;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, UUID> {
}
