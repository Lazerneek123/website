package com.lazerneek123.backend.controller;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.service.PersonService;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {

  private final PersonService personService;

  @GetMapping("/people-rating")
  public ResponseEntity<List<PersonDto>> peopleRating(@RequestParam(defaultValue = "0") int page,
                                                      @RequestParam int pageSize) {
    var people = personService.getAll(page, pageSize);
    return ResponseEntity.ok(people);
  }

  @GetMapping("/person/{id}")
  public ResponseEntity<PersonDto> getPersonData(@PathVariable UUID id) {
    var person = personService.getById(id);

    if (person == null) {
      ResponseEntity.notFound();
    }

    return ResponseEntity.ok(person);
  }

  @GetMapping("/person/{id}/investigations")
  public ResponseEntity<List<InvestigationDto>> getPersonInvestigations(
      @PathVariable UUID id, @RequestParam(defaultValue = "0") int page,
      @RequestParam int pageSize) {
    var personInvestigations = personService.getPersonInvestigations(id, page, pageSize);
    return ResponseEntity.ok(personInvestigations);
  }

  @PostMapping("/add-person")
  public ResponseEntity<PersonDto> addPerson(@RequestBody PersonDto personDto) {
    var savedPerson = personService.save(personDto);
    return ResponseEntity.ok(savedPerson);
  }

  @PutMapping("/update-person/{id}")
  public ResponseEntity<PersonDto> updatePerson(@PathVariable UUID id,
                                                @RequestBody PersonDto personDto) {

    var updatedPerson = personService.update(id, personDto);
    return ResponseEntity.ok(updatedPerson);
  }

  @DeleteMapping("/delete-person/{id}")
  public ResponseEntity<String> deletePerson(@PathVariable UUID id) {

    personService.deleteById(id);
    return ResponseEntity.ok("Person is deleted");
  }
}
