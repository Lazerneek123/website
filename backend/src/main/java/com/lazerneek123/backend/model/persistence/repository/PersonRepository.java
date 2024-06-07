package com.lazerneek123.backend.model.persistence.repository;

import com.lazerneek123.backend.model.persistence.entity.Person;
import java.util.UUID;

public interface PersonRepository extends CommonRepository<Person, UUID> {
}
