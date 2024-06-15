package com.lazerneek123.backend.model.dto;

import com.lazerneek123.backend.model.persistence.entity.Source;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class InvestigationDto {

  private UUID id;

  private String label;

  private String description;

  private Date publishDate;

  private String content;

  private String contentEnglish;

  private List<PersonDto> investigatedPersons;

  private List<Source> sources;
}
