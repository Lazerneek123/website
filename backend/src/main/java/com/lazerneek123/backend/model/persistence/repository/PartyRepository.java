package com.lazerneek123.backend.model.persistence.repository;

import com.lazerneek123.backend.model.persistence.entity.Party;
import java.util.Optional;
import java.util.UUID;

public interface PartyRepository extends CommonRepository<Party, UUID> {
  Optional<Party> findByName(String name);
}
