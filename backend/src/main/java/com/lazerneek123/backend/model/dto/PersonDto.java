package com.lazerneek123.backend.model.dto;

import com.lazerneek123.backend.model.persistence.entity.Appointment;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import com.lazerneek123.backend.model.persistence.entity.Party;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PersonDto implements Comparable<PersonDto>{

  private String name;

  private String surname;

  private String patronymic;

  private Party party;

  private List<Appointment> appointments;

  private List<Investigation> personInvestigations;

  @Override
  public int compareTo(PersonDto o) {
    return personInvestigations.size() - o.personInvestigations.size();
  }
}
