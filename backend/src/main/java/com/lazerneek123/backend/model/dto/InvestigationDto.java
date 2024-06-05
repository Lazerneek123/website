package com.lazerneek123.backend.model.dto;

import com.lazerneek123.backend.model.persistence.entity.Person;
import com.lazerneek123.backend.model.persistence.entity.Source;
import java.sql.Timestamp;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class InvestigationDto {

  private String label;

  private Timestamp publishDate;

  private String content;

  private String contentEnglish;

  private List<Person> investigatedPersons;

  private List<Source> sources;
}
