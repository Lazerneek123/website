package com.lazerneek123.backend.model.dto;

import com.lazerneek123.backend.model.persistence.entity.Appointment;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import com.lazerneek123.backend.model.persistence.entity.Party;
import java.util.List;
import java.util.UUID;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PersonDto {

  private UUID id;

  private String name;

  private String surname;

  private String patronymic;

  private byte[] image;

  private Party party;

  private List<Appointment> appointments;

  private List<Investigation> personInvestigations;
}
