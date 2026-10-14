package com.clinic.app_backend.dto;


public class SaveRecordRequest {
    private String rawNotes;
    private String summary;

    public String getRawNotes() { return rawNotes; }
    public void setRawNotes(String rawNotes) { this.rawNotes = rawNotes; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
}
