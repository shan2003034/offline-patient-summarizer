package com.clinic.app_backend.controller;


import com.clinic.app_backend.dto.SummaryRequest;
import com.clinic.app_backend.dto.SummaryResponse;
import com.clinic.app_backend.service.OllamaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class SummaryController {

    private final OllamaService ollamaService;

    public SummaryController(OllamaService ollamaService) {
        this.ollamaService = ollamaService;
    }

    @PostMapping("/summarize")
    public SummaryResponse summarizeNotes(@RequestBody SummaryRequest request) {

        String generatedSummary = ollamaService.generateSummary(request.getNotes());
        return new SummaryResponse(generatedSummary);
    }
}
