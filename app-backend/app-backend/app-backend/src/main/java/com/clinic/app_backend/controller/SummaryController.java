package com.clinic.app_backend.controller;

import com.clinic.app_backend.dto.SaveRecordRequest;
import com.clinic.app_backend.dto.SummaryRequest;
import com.clinic.app_backend.dto.SummaryResponse;
import com.clinic.app_backend.entity.PatientRecord;
import com.clinic.app_backend.repository.PatientRecordRepository;
import com.clinic.app_backend.service.OllamaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class SummaryController {

    private final OllamaService ollamaService;
    private final PatientRecordRepository patientRecordRepository;

    public SummaryController(OllamaService ollamaService, PatientRecordRepository patientRecordRepository) {
        this.ollamaService = ollamaService;
        this.patientRecordRepository = patientRecordRepository;
    }


    @PostMapping("/summarize")
    public SummaryResponse summarizeNotes(@RequestBody SummaryRequest request) {
        String generatedSummary = ollamaService.generateSummary(request.getNotes());
        return new SummaryResponse(generatedSummary);
    }


    @PostMapping("/save")
    public ResponseEntity<String> saveRecord(@RequestBody SaveRecordRequest request) {
        PatientRecord record = new PatientRecord();
        record.setRawNotes(request.getRawNotes());
        record.setGeneratedSummary(request.getSummary());
        patientRecordRepository.save(record);

        return ResponseEntity.ok("Record saved successfully");
    }


    @GetMapping("/history")
    public ResponseEntity<List<PatientRecord>> getHistory() {
        List<PatientRecord> records = patientRecordRepository.findAllByOrderByCreatedAtDesc();
        return ResponseEntity.ok(records);
    }

    @GetMapping("/history/{id}")
    public ResponseEntity<PatientRecord> getRecordById(@PathVariable Long id) {
        return patientRecordRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/history/{id}")
    public ResponseEntity<String> deleteRecord(@PathVariable Long id) {
        if (patientRecordRepository.existsById(id)) {
            patientRecordRepository.deleteById(id);
            return ResponseEntity.ok("Record deleted successfully");
        }
        return ResponseEntity.notFound().build();
    }
}