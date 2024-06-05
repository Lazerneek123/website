package com.lazerneek123.backend.model.persistence.repository;

import com.lazerneek123.backend.model.persistence.entity.Investigation;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

public interface InvestigationRepository extends CrudRepository<Investigation, UUID> {
}
