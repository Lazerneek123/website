package com.lazerneek123.backend.model.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

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

  @CreationTimestamp
  @Temporal(TemporalType.TIMESTAMP)
  private Date publishDate;

  private String content;

  private String contentEnglish;

  @JsonBackReference
  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
  @JoinTable(
      name = "person_investigation",
      joinColumns = {@JoinColumn(name = "investigation_id")},
      inverseJoinColumns = {@JoinColumn(name = "person_id")}
  )
  private List<Person> investigatedPersons;

  @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinTable(
      name = "investigation_source",
      joinColumns = {@JoinColumn(name = "investigation_id")},
      inverseJoinColumns = {@JoinColumn(name = "source_id")}
  )
  private List<Source> sources;
}
