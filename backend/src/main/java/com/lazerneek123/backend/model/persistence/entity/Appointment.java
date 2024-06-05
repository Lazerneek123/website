package com.lazerneek123.backend.model.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "appointment")
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {

  @Id
  private UUID id;

  private UUID personId;

  private String personAppointment;

  private byte[] image;
}
