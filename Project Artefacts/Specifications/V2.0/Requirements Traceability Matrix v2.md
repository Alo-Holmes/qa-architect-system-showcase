# Requirements Traceability Matrix (RTM)

| Document Information |                                        |
| -------------------- | -------------------------------------- |
| **Project**          | Portfolio Website                      |
| **Document**         | Requirements Traceability Matrix (RTM) |
| **Version**          | 1.0                                    |
| **Status**           | Baselined                              |
| **Author**           | Quality Solutions Architect            |
| **Classification**   | Engineering Artefact                   |

---

# 1. Purpose

The Requirements Traceability Matrix (RTM) establishes traceability between the Business Requirements Specification (BRS), Functional Requirements Specification (FRS), Manual Test Cases, and future automated Playwright test suites.

The RTM provides a single source of truth for verifying that every approved business capability is represented by functional behaviour and validated through testing.

---

# 2. Traceability Matrix

| Business Requirement                           | Functional Requirement(s)                         | Manual Test Cases | Planned Automation                         | Status  |
| ---------------------------------------------- | ------------------------------------------------- | ----------------- | ------------------------------------------ | ------- |
| **BR-001** Portfolio Availability & Navigation | FR-001 Homepage Availability<br>FR-002 Navigation | TC-001 → TC-005   | availability.spec.ts<br>navigation.spec.ts | Planned |
| **BR-002** Professional Profile Discovery      | FR-003 Professional Profile Presentation          | TC-006 → TC-009   | profile.spec.ts                            | Planned |
| **BR-003** Curriculum Vitae Retrieval          | FR-004 Curriculum Vitae Retrieval                 | TC-010 → TC-012   | cv-download.spec.ts                        | Planned |
| **BR-004** Professional Networking             | FR-005 Professional Networking                    | TC-013 → TC-016   | networking.spec.ts                         | Planned |
| **BR-005** Telemetry Health Monitoring         | FR-006 Telemetry Health Monitoring                | TC-017 → TC-021   | telemetry.spec.ts                          | Planned |

---

# 3. Coverage Summary

| Artefact                | Coverage     |
| ----------------------- | ------------ |
| Business Requirements   | 5            |
| Functional Requirements | 6            |
| Manual Test Cases       | 21 (Planned) |
| Automated Test Suites   | 6 (Planned)  |

---

# 4. Traceability Flow

```text
Business Requirement
        │
        ▼
Functional Requirement
        │
        ▼
Manual Test Case
        │
        ▼
Playwright Automation
        │
        ▼
Continuous Integration
```

Every business requirement shall map to at least one functional requirement.

Every functional requirement shall map to at least one manual test case.

Every manual test case shall be considered an automation candidate unless explicitly excluded.

---

# 5. Coverage Status

| Status      | Definition                                                         |
| ----------- | ------------------------------------------------------------------ |
| Planned     | Requirement approved. Implementation has not commenced.            |
| In Progress | Manual testing and/or automation development underway.             |
| Automated   | Functional requirement covered by automated Playwright tests.      |
| Verified    | Requirement successfully validated through Continuous Integration. |
| Deferred    | Requirement intentionally postponed from the current release.      |

---

# 6. Governance Rules

The following governance rules apply to all requirements.

| Rule ID | Rule                                                                            |
| ------- | ------------------------------------------------------------------------------- |
| GOV-001 | Every Business Requirement shall map to one or more Functional Requirements.    |
| GOV-002 | Every Functional Requirement shall map to one or more Manual Test Cases.        |
| GOV-003 | Every Manual Test Case shall trace back to a single Functional Requirement.     |
| GOV-004 | Every Functional Requirement shall be considered for automation.                |
| GOV-005 | No orphaned requirements, functional specifications, or test cases shall exist. |
| GOV-006 | Traceability shall be maintained whenever requirements are modified.            |

---

# 7. AI Responsibility Mapping

This project adopts a multi-tier AI-assisted Quality Engineering workflow.

| Phase             | Primary AI     | Deliverable                                 |
| ----------------- | -------------- | ------------------------------------------- |
| Analysis          | ChatGPT        | Business Requirements Specification (BRS)   |
| Functional Design | ChatGPT        | Functional Requirements Specification (FRS) |
| Traceability      | ChatGPT        | Requirements Traceability Matrix (RTM)      |
| Test Design       | ChatGPT        | Manual Test Cases                           |
| Automation        | GitHub Copilot | Playwright Page Objects and Test Scripts    |
| CI/CD Triage      | Gemini         | Automated Failure Analysis and Bug Reports  |

---

# 8. Document Revision History

| Version | Description                                       |
| ------- | ------------------------------------------------- |
| 1.0     | Initial baseline Requirements Traceability Matrix |
