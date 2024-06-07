package com.lazerneek123.backend.model.persistence.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface CommonRepository<T, I>
    extends CrudRepository<T, I>, PagingAndSortingRepository<T, I> {


}
