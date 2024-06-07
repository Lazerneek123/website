package com.lazerneek123.backend.model.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  private String appointment;

  private byte[] image;
}
