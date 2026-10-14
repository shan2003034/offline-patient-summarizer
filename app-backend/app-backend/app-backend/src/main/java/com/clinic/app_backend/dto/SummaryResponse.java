package com.clinic.app_backend.dto;

public class SummaryResponse {
    private String summary;

    public SummaryResponse(String summary) {
        this.summary = summary;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
