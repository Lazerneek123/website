package com.lazerneek123.backend.model.persistence.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "person")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private String name;

  private String surname;

  private String patronymic;

  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
  private Party party;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
  @JoinTable(
      name = "person_appointment",
      joinColumns = {@JoinColumn(name = "person_id")},
      inverseJoinColumns = {@JoinColumn(name = "appointment_id")}
  )
  private List<Appointment> appointments;

  @OneToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "person_investigation",
      joinColumns = {@JoinColumn(name = "person_id")},
      inverseJoinColumns = {@JoinColumn(name = "investigation_id")}
  )
  private List<Investigation> personInvestigations;
}
