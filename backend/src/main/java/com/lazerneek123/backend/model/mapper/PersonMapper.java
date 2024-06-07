package com.lazerneek123.backend.model.mapper;

import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.model.persistence.entity.Person;
import jakarta.annotation.Nonnull;
import java.util.ArrayList;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PersonMapper {

  PersonMapper INSTANCE = Mappers.getMapper(PersonMapper.class);

  @Nonnull
  default List<PersonDto> toDto(@Nonnull Iterable<Person> people) {
    List<PersonDto> peopleDto = new ArrayList<>();
    for (var person : people) {
      peopleDto.add(toDto(person));
    }
    return peopleDto;
  }

  @Nonnull
  default List<Person> toEntity(@Nonnull Iterable<PersonDto> peopleDto) {
    List<Person> people = new ArrayList<>();
    for (var personDto : peopleDto) {
      people.add(toEntity(personDto));
    }
    return people;
  }

  @Mapping(target = "name")
  @Nonnull
  PersonDto toDto(@Nonnull Person person);

  @Mapping(target = "name")
  @Nonnull
  Person toEntity(@Nonnull PersonDto person);
}
