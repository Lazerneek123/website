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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "investigation")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Investigation {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private String label;

  private Timestamp publishDate;

  private String content;

  private String contentEnglish;

  @OneToMany(fetch = FetchType.LAZY)
  @JoinTable(
      name = "person_investigation",
      joinColumns = {@JoinColumn(name = "investigation_id")},
      inverseJoinColumns = {@JoinColumn(name = "person_id")}
  )
  private List<Person> investigatedPersons;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
  @JoinTable(
      name = "investigation_source",
      joinColumns = {@JoinColumn(name = "investigation_id")},
      inverseJoinColumns = {@JoinColumn(name = "source_id")}
  )
  private List<Source> sources;
}
