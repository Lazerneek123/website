package com.lazerneek123.backend.model.mapper;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import com.lazerneek123.backend.model.persistence.entity.Person;
import jakarta.annotation.Nonnull;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface InvestigationMapper {

  InvestigationMapper INSTANCE = Mappers.getMapper(InvestigationMapper.class);

  @Mapping(target = "label")
  @Nonnull
  InvestigationDto toDto(@Nonnull Investigation investigation);

  @Mapping(target = "label")
  @Nonnull
  Investigation toEntity(@Nonnull InvestigationDto investigation);
}
