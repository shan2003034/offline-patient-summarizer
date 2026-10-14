package com.clinic.app_backend.repository;

import com.clinic.app_backend.entity.PatientRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRecordRepository extends JpaRepository<PatientRecord, Long> {
    List<PatientRecord> findAllByOrderByCreatedAtDesc();
}
