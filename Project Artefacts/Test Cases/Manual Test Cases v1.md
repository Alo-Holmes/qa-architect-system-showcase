# Manual Test Cases

| Document Information |                             |
| -------------------- | --------------------------- |
| **Project**          | Portfolio Website           |
| **Document**         | Manual Test Cases           |
| **Version**          | 1.0                         |
| **Status**           | Baselined                   |
| **Author**           | Quality Solutions Architect |
| **Classification**   | Test Artefact               |

---

# 1. Purpose

This document defines the manual test cases required to verify that the Portfolio Website satisfies the approved Business and Functional Requirements.

The test cases contained within this document focus on validating business capabilities from an end-user perspective and provide traceability to the Business Requirements Specification (BRS) and Functional Requirements Specification (FRS).

---

# 2. Test Scope

This document covers the following business capabilities:

* Portfolio Availability & Navigation
* Professional Profile Discovery
* Curriculum Vitae Retrieval
* Professional Networking
* Telemetry Health Monitoring

---

# 3. Test Case Conventions

| Field                  | Description                                    |
| ---------------------- | ---------------------------------------------- |
| Business Requirement   | Requirement from the BRS                       |
| Functional Requirement | Requirement from the FRS                       |
| Priority               | Business priority of the test                  |
| Automation Candidate   | Indicates whether the test should be automated |
| Future Automation      | Planned Playwright automation suite            |

---

# Journey 1 — Portfolio Availability & Navigation

---

## TC-001 — Access Portfolio Homepage

| Field                  | Value                |
| ---------------------- | -------------------- |
| Business Requirement   | BR-001               |
| Functional Requirement | FR-001               |
| Priority               | Critical             |
| Automation Candidate   | Yes                  |
| Future Automation      | availability.spec.ts |

### Objective

Verify that a visitor can successfully access the portfolio homepage.

### Preconditions

* Website is deployed.
* Internet connection available.

### Test Steps

| Step | Action                         |
| ---- | ------------------------------ |
| 1    | Navigate to the portfolio URL. |

### Expected Results

* Homepage loads successfully.
* Hero section is visible.
* Navigation is available.
* No blocking errors are observed.

---

## TC-002 — Navigate to Primary Portfolio Sections

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-001             |
| Functional Requirement | FR-002             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | navigation.spec.ts |

### Objective

Verify that visitors can navigate to all primary portfolio sections.

### Preconditions

Homepage loaded successfully.

### Test Steps

1. Select each navigation option.
2. Observe page navigation.

### Expected Results

* Each section is reachable.
* Correct content is displayed.
* Navigation remains functional throughout.

---

## TC-003 — Verify Internal Navigation Integrity

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-001             |
| Functional Requirement | FR-002             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | navigation.spec.ts |

### Objective

Verify that all internal navigation paths resolve correctly.

### Preconditions

Homepage loaded.

### Test Steps

1. Navigate through all available internal links.

### Expected Results

* No broken internal links.
* Expected destinations reached.

---

## TC-004 — Verify Responsive Navigation

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-001             |
| Functional Requirement | FR-002             |
| Priority               | Medium             |
| Automation Candidate   | Yes                |
| Future Automation      | responsive.spec.ts |

### Objective

Verify that navigation remains usable across supported viewport sizes.

### Preconditions

Website available.

### Test Steps

1. Resize browser.
2. Navigate using available controls.

### Expected Results

* Navigation remains accessible.
* Navigation functions correctly.

---

## TC-005 — Verify Unavailable Page Handling

| Field                  | Value                |
| ---------------------- | -------------------- |
| Business Requirement   | BR-001               |
| Functional Requirement | FR-001               |
| Priority               | Medium               |
| Automation Candidate   | Yes                  |
| Future Automation      | availability.spec.ts |

### Objective

Verify graceful handling of unavailable pages.

### Preconditions

Website deployed.

### Test Steps

1. Navigate to an invalid URL.

### Expected Results

* Appropriate unavailable page displayed.
* User can return to the homepage.

---

# Journey 2 — Professional Profile Discovery

---

## TC-006 — View Professional Summary

| Field                  | Value           |
| ---------------------- | --------------- |
| Business Requirement   | BR-002          |
| Functional Requirement | FR-003          |
| Priority               | High            |
| Automation Candidate   | Yes             |
| Future Automation      | profile.spec.ts |

### Objective

Verify that visitors can view the professional summary.

### Expected Results

* Professional summary displayed.
* Content readable.

---

## TC-007 — Review Skills Information

| Field                  | Value           |
| ---------------------- | --------------- |
| Business Requirement   | BR-002          |
| Functional Requirement | FR-003          |
| Priority               | High            |
| Automation Candidate   | Yes             |
| Future Automation      | profile.spec.ts |

### Objective

Verify technical skills are presented.

### Expected Results

* Skills categories visible.
* Skills readable.

---

## TC-008 — Review Career History

| Field                  | Value           |
| ---------------------- | --------------- |
| Business Requirement   | BR-002          |
| Functional Requirement | FR-003          |
| Priority               | High            |
| Automation Candidate   | Yes             |
| Future Automation      | profile.spec.ts |

### Objective

Verify career history is available.

### Expected Results

* Experience displayed.
* Information presented logically.

---

## TC-009 — Review Professional Testimonials

| Field                  | Value           |
| ---------------------- | --------------- |
| Business Requirement   | BR-002          |
| Functional Requirement | FR-003          |
| Priority               | Medium          |
| Automation Candidate   | Yes             |
| Future Automation      | profile.spec.ts |

### Objective

Verify testimonials are available.

### Expected Results

* Testimonials visible.
* Attribution present.

---

# Journey 3 — Curriculum Vitae Retrieval

---

## TC-010 — Download Current Curriculum Vitae

| Field                  | Value               |
| ---------------------- | ------------------- |
| Business Requirement   | BR-003              |
| Functional Requirement | FR-004              |
| Priority               | Critical            |
| Automation Candidate   | Yes                 |
| Future Automation      | cv-download.spec.ts |

### Objective

Verify visitors can download the latest CV.

### Test Steps

1. Select Download CV.

### Expected Results

* Download begins.
* PDF obtained successfully.

---

## TC-011 — Validate Downloaded Curriculum Vitae

| Field                  | Value               |
| ---------------------- | ------------------- |
| Business Requirement   | BR-003              |
| Functional Requirement | FR-004              |
| Priority               | High                |
| Automation Candidate   | Yes                 |
| Future Automation      | cv-download.spec.ts |

### Objective

Verify downloaded document is valid.

### Expected Results

* PDF opens.
* Document readable.
* Latest version confirmed.

---

## TC-012 — Verify Handling of Unavailable CV

| Field                  | Value               |
| ---------------------- | ------------------- |
| Business Requirement   | BR-003              |
| Functional Requirement | FR-004              |
| Priority               | Medium              |
| Automation Candidate   | Yes                 |
| Future Automation      | cv-download.spec.ts |

### Objective

Verify behaviour when the CV is unavailable.

### Expected Results

* User receives appropriate feedback.
* Website remains usable.

---

# Journey 4 — Professional Networking

---

## TC-013 — Contact via Email

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-004             |
| Functional Requirement | FR-005             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | networking.spec.ts |

### Objective

Verify email contact option.

### Expected Results

* Mail client initiated.

---

## TC-014 — Access GitHub Profile

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-004             |
| Functional Requirement | FR-005             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | networking.spec.ts |

### Objective

Verify GitHub profile link.

### Expected Results

* GitHub profile opens.

---

## TC-015 — Access LinkedIn Profile

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-004             |
| Functional Requirement | FR-005             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | networking.spec.ts |

### Objective

Verify LinkedIn profile link.

### Expected Results

* LinkedIn profile opens.

---

## TC-016 — Contact via WhatsApp

| Field                  | Value              |
| ---------------------- | ------------------ |
| Business Requirement   | BR-004             |
| Functional Requirement | FR-005             |
| Priority               | High               |
| Automation Candidate   | Yes                |
| Future Automation      | networking.spec.ts |

### Objective

Verify WhatsApp contact option.

### Expected Results

* WhatsApp conversation initiated.

---

# Journey 5 — Telemetry Health Monitoring

---

## TC-017 — View Telemetry Dashboard

| Field                  | Value             |
| ---------------------- | ----------------- |
| Business Requirement   | BR-005            |
| Functional Requirement | FR-006            |
| Priority               | High              |
| Automation Candidate   | Yes               |
| Future Automation      | telemetry.spec.ts |

### Objective

Verify telemetry dashboard is displayed.

### Expected Results

* Telemetry section visible.
* Project cards displayed.

---

## TC-018 — Verify Project Status Presentation

| Field                  | Value             |
| ---------------------- | ----------------- |
| Business Requirement   | BR-005            |
| Functional Requirement | FR-006            |
| Priority               | High              |
| Automation Candidate   | Yes               |
| Future Automation      | telemetry.spec.ts |

### Objective

Verify project status is presented correctly.

### Expected Results

* Current status displayed.
* Status understandable.

---

## TC-019 — Access Build Information

| Field                  | Value             |
| ---------------------- | ----------------- |
| Business Requirement   | BR-005            |
| Functional Requirement | FR-006            |
| Priority               | High              |
| Automation Candidate   | Yes               |
| Future Automation      | telemetry.spec.ts |

### Objective

Verify users can access available build information.

### Expected Results

* Build information accessible.
* Correct destination reached.

---

## TC-020 — Verify Graceful Handling of Unavailable Telemetry

| Field                  | Value             |
| ---------------------- | ----------------- |
| Business Requirement   | BR-005            |
| Functional Requirement | FR-006            |
| Priority               | High              |
| Automation Candidate   | Yes               |
| Future Automation      | telemetry.spec.ts |

### Objective

Verify application behaviour when telemetry is unavailable.

### Expected Results

* Unavailable status communicated.
* No misleading status shown.

---

## TC-021 — Verify Telemetry Information is Understandable

| Field                  | Value             |
| ---------------------- | ----------------- |
| Business Requirement   | BR-005            |
| Functional Requirement | FR-006            |
| Priority               | Medium            |
| Automation Candidate   | Yes               |
| Future Automation      | telemetry.spec.ts |

### Objective

Verify telemetry information is understandable by visitors.

### Expected Results

* Status indicators are understandable.
* Visitors can distinguish project health.

---

# 4. Coverage Summary

| Business Requirement                       | Functional Requirement(s) | Test Cases      |
| ------------------------------------------ | ------------------------- | --------------- |
| BR-001 Portfolio Availability & Navigation | FR-001, FR-002            | TC-001 – TC-005 |
| BR-002 Professional Profile Discovery      | FR-003                    | TC-006 – TC-009 |
| BR-003 Curriculum Vitae Retrieval          | FR-004                    | TC-010 – TC-012 |
| BR-004 Professional Networking             | FR-005                    | TC-013 – TC-016 |
| BR-005 Telemetry Health Monitoring         | FR-006                    | TC-017 – TC-021 |

---

# 5. Document Revision History

| Version | Description                        |
| ------- | ---------------------------------- |
| 1.0     | Initial baseline Manual Test Cases |
