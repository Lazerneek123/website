package com.lazerneek123.backend.service.impl;

import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.model.mapper.PersonMapper;
import com.lazerneek123.backend.model.persistence.repository.PersonRepository;
import com.lazerneek123.backend.service.PersonService;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PersonServiceImpl implements PersonService {

  PersonRepository personRepository;

  @Override
  public void save(PersonDto personDto) {
    var person = PersonMapper.INSTANCE.toEntity(personDto);
    personRepository.save(person);
  }

  @Override
  public PersonDto getById(UUID id) {
    var person = personRepository.findById(id);
    return PersonMapper.INSTANCE.toDto(person.get());
  }

  @Override
  public List<PersonDto> getAll() {
    var people = personRepository.findAll();
    return PersonMapper.INSTANCE.toDto(people);
  }
}
