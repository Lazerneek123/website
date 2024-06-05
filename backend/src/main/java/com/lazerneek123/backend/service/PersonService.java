package com.lazerneek123.backend.service;

import com.lazerneek123.backend.model.dto.PersonDto;
import java.util.List;
import java.util.UUID;

public interface PersonService {

   void save(PersonDto personDto);
   PersonDto getById(UUID id);
   List<PersonDto> getAll();
}
