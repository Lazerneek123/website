package com.lazerneek123.backend.service.impl;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.model.mapper.InvestigationMapper;
import com.lazerneek123.backend.model.mapper.PersonMapper;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import com.lazerneek123.backend.model.persistence.entity.Person;
import com.lazerneek123.backend.model.persistence.repository.PersonRepository;
import com.lazerneek123.backend.service.PersonService;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

  private final PersonRepository personRepository;

  @Override
  public PersonDto save(PersonDto personDto) {
    var person = PersonMapper.INSTANCE.toEntity(personDto);
    var newPerson = personRepository.save(person);
    return PersonMapper.INSTANCE.toDto(newPerson);
  }

  @Override
  public PersonDto update(UUID id, PersonDto personDto) {
    var person = personRepository.findById(id).get();

    person.setName(personDto.getName());
    person.setSurname(personDto.getSurname());
    person.setPatronymic(personDto.getPatronymic());
    person.setParty(personDto.getParty());
    person.setAppointments(personDto.getAppointments());

    var updatedPerson = personRepository.save(person);
    return PersonMapper.INSTANCE.toDto(updatedPerson);
  }

  @Override
  public void deleteById(UUID id) {
     personRepository.deleteById(id);
  }

  @Override
  public PersonDto getById(UUID id) {
    var person = personRepository.findById(id);
    return PersonMapper.INSTANCE.toDto(person.get());
  }

  @Override
  public List<InvestigationDto> getPersonInvestigations(UUID id, int page, int pageSize) {
    var person = personRepository.findById(id).get();
    var pagable = Pageable.ofSize(pageSize).withPage(page);
    final Page<Investigation> personInvestigations =
        new PageImpl<>(person.getPersonInvestigations(), pagable, pageSize);
    return InvestigationMapper.INSTANCE.toDto(personInvestigations.get().toList());
  }

  @Override
  public List<PersonDto> getAll(int page, int pageSize) {
    var people =
        personRepository.findAll(Pageable.ofSize(pageSize).withPage(page).getSortOr(Sort.sort(
            Person.class)));
    return PersonMapper.INSTANCE.toDto(people);
  }
}
