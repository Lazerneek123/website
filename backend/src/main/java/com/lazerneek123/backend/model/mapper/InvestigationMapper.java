package com.lazerneek123.backend.model.mapper;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import jakarta.annotation.Nonnull;
import java.util.ArrayList;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface InvestigationMapper {

  InvestigationMapper INSTANCE = Mappers.getMapper(InvestigationMapper.class);

  @Nonnull
  default List<InvestigationDto> toDto(@Nonnull Iterable<Investigation> people) {
    List<InvestigationDto> peopleDto = new ArrayList<>();
    for (var person : people) {
      peopleDto.add(toDto(person));
    }
    return peopleDto;
  }

  @Nonnull
  default List<Investigation> toEntity(@Nonnull Iterable<InvestigationDto> peopleDto) {
    List<Investigation> people = new ArrayList<>();
    for (var personDto : peopleDto) {
      people.add(toEntity(personDto));
    }
    return people;
  }

  @Mapping(target = "label")
  @Nonnull
  InvestigationDto toDto(@Nonnull Investigation investigation);

  @Mapping(target = "label")
  @Nonnull
  Investigation toEntity(@Nonnull InvestigationDto investigation);
}
