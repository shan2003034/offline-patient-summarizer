package com.clinic.app_backend.service;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class OllamaService {

    private final String OLLAMA_URL = "http://localhost:11434/api/generate";
    private final RestTemplate restTemplate;

    public OllamaService() {
        this.restTemplate = new RestTemplate();
    }

    public String generateSummary(String patientNotes) {
        Map<String, Object> request = new HashMap<>();
        request.put("model", "gemma:2b");

        String prompt = "You are a professional clinical assistant. Transform the following raw patient notes into a highly structured clinical summary.\n" +
                "Use Markdown formatting. Include exactly these headings: ### Diagnosis, ### Patient Details, ### Clinical Presentation, ### Vital Signs, and ### Management Plan.\n" +
                "Raw notes:\n" + patientNotes;

        request.put("prompt", prompt);
        request.put("stream", false);

        try {
            Map<String, Object> response = restTemplate.postForObject(OLLAMA_URL, request, Map.class);
            if (response != null && response.containsKey("response")) {
                return response.get("response").toString();
            }
        } catch (Exception e) {
            System.err.println("Ollama Connection Error: " + e.getMessage());
        }

        return "Error: Unable to generate summary. Please check if Ollama is running.";
    }
}