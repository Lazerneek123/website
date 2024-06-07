package com.lazerneek123.backend.service;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.dto.PersonDto;
import java.util.List;
import java.util.UUID;

public interface PersonService {

  PersonDto save(PersonDto personDto);

  PersonDto update(UUID id, PersonDto personDto);

  void deleteById(UUID id);

  PersonDto getById(UUID id);

  List<InvestigationDto> getPersonInvestigations(UUID id, int page, int pageSize);

  List<PersonDto> getAll(int page, int pageSize);
}
