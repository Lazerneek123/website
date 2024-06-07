package com.lazerneek123.backend.controller;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.service.InvestigationService;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class InvestigationController {

  private final InvestigationService investigationService;

  @GetMapping("/latest-investigations")
  public ResponseEntity<List<InvestigationDto>> getLatestInvestigations(
      @RequestParam(defaultValue = "0") int page,
      @RequestParam int pageSize) {

    var latestInvestigations = investigationService.getLatestInvestigations(page, pageSize);
    return ResponseEntity.ok(latestInvestigations);
  }

  @GetMapping("/investigation/{id}")
  public ResponseEntity<InvestigationDto> getInvestigation(@PathVariable UUID id) {
    var investigation = investigationService.getById(id);
    return ResponseEntity.ok(investigation);
  }

  @PostMapping("/add-investigation")
  public ResponseEntity<InvestigationDto> addInvestigation(
      @RequestBody InvestigationDto investigationDto) {

    var savedInvestigation = investigationService.save(investigationDto);
    return ResponseEntity.ok(savedInvestigation);
  }

  @PutMapping("/update-investigation/{id}")
  public ResponseEntity<InvestigationDto> updateInvestigation(
      @PathVariable UUID id, @RequestBody InvestigationDto investigationDto) {

    var savedInvestigation = investigationService.update(id, investigationDto);
    return ResponseEntity.ok(savedInvestigation);
  }

  @DeleteMapping("/delete-investigation/{id}")
  public ResponseEntity<String> updateInvestigation(@PathVariable UUID id) {

    investigationService.deleteById(id);
    return ResponseEntity.ok("Investigation is deleted");
  }
}
