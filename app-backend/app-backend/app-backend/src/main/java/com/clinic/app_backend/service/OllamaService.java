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

        // 100% Safe & Strict Clinical Prompt
        String prompt = "You are a highly accurate and strict clinical AI assistant. Your sole responsibility is to organize raw physician notes into a structured medical report without altering or losing the clinical truth.\n\n" +
                "CRITICAL RULES FOR PATIENT SAFETY:\n" +
                "1. ZERO OMISSION: You MUST extract and explicitly include ALL medications (both current and newly prescribed), dosages, test results (e.g., FBS, X-Rays), and follow-up instructions. Do not summarize away or leave ANY clinical data out.\n" +
                "2. ZERO HALLUCINATION: Do not invent, assume, or infer any information. If a detail (e.g., age, gender, or vital signs) is missing from the raw notes, explicitly write 'Not provided'.\n" +
                "3. FORMATTING: Use professional Markdown. You must use exactly these headings: ### Diagnosis, ### Patient Details, ### Clinical Presentation, ### Vital Signs, and ### Management Plan.\n\n" +
                "Raw notes:\n" + patientNotes;

        request.put("prompt", prompt);
        request.put("stream", false);


        Map<String, Object> options = new HashMap<>();
        options.put("temperature", 0.1);
        request.put("options", options);

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