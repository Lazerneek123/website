package com.lazerneek123.backend.service.impl;

import com.lazerneek123.backend.model.dto.InvestigationDto;
import com.lazerneek123.backend.model.dto.PersonDto;
import com.lazerneek123.backend.model.mapper.InvestigationMapper;
import com.lazerneek123.backend.model.persistence.entity.Investigation;
import com.lazerneek123.backend.model.persistence.entity.Person;
import com.lazerneek123.backend.model.persistence.repository.InvestigationRepository;
import com.lazerneek123.backend.service.InvestigationService;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class InvestigationServiceImpl implements InvestigationService {

  private final InvestigationRepository investigationRepository;

  @Override
  public InvestigationDto save(InvestigationDto investigationDto) {
    var investigation = InvestigationMapper.INSTANCE.toEntity(investigationDto);

    var savedInvestigation = investigationRepository.save(investigation);
    return InvestigationMapper.INSTANCE.toDto(savedInvestigation);
  }

  @Override
  public InvestigationDto update(UUID id, InvestigationDto investigationDto) {
    var investigation = investigationRepository.findById(id).get();

    investigation.setLabel(investigationDto.getLabel());
    investigation.setContent(investigationDto.getContent());
    investigation.setContentEnglish(investigationDto.getContentEnglish());
    investigation.setSources(investigationDto.getSources());

    var updatedInvestigation = investigationRepository.save(investigation);
    return InvestigationMapper.INSTANCE.toDto(updatedInvestigation);
  }

  @Override
  public void deleteById(UUID id) {
    investigationRepository.deleteById(id);
  }

  @Override
  public InvestigationDto getById(UUID id) {
    var investigation = investigationRepository.findById(id).get();
    return InvestigationMapper.INSTANCE.toDto(investigation);
  }

  @Override
  public List<InvestigationDto> getLatestInvestigations(int page, int pageSize) {
    var investigations = investigationRepository.findAll(Pageable.ofSize(pageSize).withPage(page));
    var sortedInvestigations = investigations.get().sorted(Investigation::compareTo).toList();
    return InvestigationMapper.INSTANCE.toDto(sortedInvestigations);
  }
}
