package com.lazerneek123.backend.service;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import java.util.List;
import java.util.UUID;

public interface InvestigationService {

  InvestigationDto save(InvestigationDto investigationDto);

  InvestigationDto update(UUID id, InvestigationDto investigationDto);

  void deleteById(UUID id);

  InvestigationDto getById(UUID id);

  List<InvestigationDto> getLatestInvestigations(int page, int pageSize);
}
