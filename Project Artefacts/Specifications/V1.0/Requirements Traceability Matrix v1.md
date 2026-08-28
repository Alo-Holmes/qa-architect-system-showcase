Requirements Traceability Matrix (RTM)

| BR     | Functional Requirement | Test Suite             | Test Cases                   |
| ------ | ---------------------- | ---------------------- | ---------------------------- |
| BR-001 | FR-001                 | availability.spec.ts   | TC-BR001-001 to TC-BR001-004 |
| BR-002 | FR-002                 | navigation.spec.ts     | TC-BR002-001 to TC-BR002-005 |
| BR-003 | FR-003                 | profile.spec.ts        | TC-BR003-001 to TC-BR003-004 |
| BR-004 | FR-004                 | skills.spec.ts         | TC-BR004-001 to TC-BR004-006 |
| BR-005 | FR-005                 | experience.spec.ts     | TC-BR005-001 to TC-BR005-003 |
| BR-006 | FR-006                 | testimonials.spec.ts   | TC-BR006-001 to TC-BR006-003 |
| BR-007 | FR-007                 | cv-download.spec.ts    | TC-BR007-001 to TC-BR007-003 |
| BR-008 | FR-008                 | contact-links.spec.ts  | TC-BR008-001 to TC-BR008-004 |
| BR-009 | FR-009                 | github.spec.ts         | TC-BR009-001 to TC-BR009-003 |
| BR-010 | FR-010                 | telemetry.spec.ts      | TC-BR010-001 to TC-BR010-007 |
| BR-011 | FR-011                 | responsive.spec.ts     | TC-BR011-001 to TC-BR011-006 |
| BR-012 | FR-012                 | layout.spec.ts         | TC-BR012-001 to TC-BR012-005 |
| BR-013 | FR-013                 | external-links.spec.ts | TC-BR013-001 to TC-BR013-005 |

---

# 3. Test Design Specification (TDS)

## Objective

To verify every business requirement through automated Playwright tests executed during Continuous Integration.

---

## Test Levels

| Level         | Scope                           |
| ------------- | ------------------------------- |
| Smoke         | Website availability            |
| Functional    | User journeys                   |
| Regression    | Complete feature validation     |
| UI            | Layout and responsive behaviour |
| Accessibility | WCAG validation                 |
| Integration   | External resources              |
| Visual        | Screenshot comparisons          |

---

## Automation Framework

Framework: Playwright

Language: TypeScript

Execution:

* Local
* GitHub Actions
* Pull Request validation
* Nightly regression

---

## Test Organisation

```
tests/

availability/
navigation/
layout/
profile/
skills/
experience/
testimonials/
cv/
contact/
github/
telemetry/
responsive/
accessibility/
visual/
```

---

# 4. Master Test Case Specification

## BR-001 Website Availability

### TC-BR001-001

**Title**

Homepage loads successfully

**Preconditions**

Application deployed

**Steps**

1. Open homepage

**Expected Result**

Homepage displayed successfully

---

### TC-BR001-002

Verify page returns HTTP 200.

---

### TC-BR001-003

Verify branding is visible.

---

### TC-BR001-004

Verify no JavaScript errors.

---

## BR-002 Navigation

### TC-BR002-001

Verify navigation menu is visible.

### TC-BR002-002

Verify each navigation link scrolls correctly.

### TC-BR002-003

Verify no broken anchors.

### TC-BR002-004

Verify keyboard navigation.

### TC-BR002-005

Verify mobile navigation.

---

## BR-003 Profile

* Verify professional summary.
* Verify current role.
* Verify location.
* Verify hero section renders.

---

## BR-004 Skills

* Verify skills section exists.
* Verify categories render.
* Verify badges visible.
* Verify overflow handling.
* Verify responsive layout.
* Verify content readability.

---

## BR-005 Experience

* Verify timeline.
* Verify chronological order.
* Verify employer information.

---

## BR-006 Testimonials

* Verify testimonials visible.
* Verify attribution.
* Verify layout consistency.

---

## BR-007 CV

* Verify download button.
* Verify downloadable PDF.
* Verify valid document.

---

## BR-008 Contact

* Verify Email.
* Verify LinkedIn.
* Verify WhatsApp.
* Verify links open correctly.

---

## BR-009 GitHub

* Verify GitHub link.
* Verify profile opens.
* Verify repository page reachable.

---

## BR-010 Telemetry

* Verify telemetry section.

* Verify Passing state.

* Verify Failing state.

* Verify Unknown state.

* Verify telemetry refresh.

* Verify unavailable service.

* Verify build links.

---

## BR-011 Responsive

Test viewport sizes:

* Mobile
* Tablet
* Laptop
* Desktop
* Ultra-wide

Verify layout integrity.

---

## BR-012 Layout

Verify:

* Bento cards visible
* Card alignment
* Consistent spacing
* Visual hierarchy
* No overflow

---

## BR-013 External Resources

Verify every published external resource resolves successfully.

---

# 5. Automation Traceability

```
Business Requirement
        │
        ▼
Functional Requirement
        │
        ▼
Acceptance Criteria
        │
        ▼
Playwright Test Suite
        │
        ▼
Individual Test Case
        │
        ▼
GitHub Actions Pipeline
        │
        ▼
Deployment Status Badge
```

---

# 6. CI/CD Quality Gates

A deployment is considered successful only when all mandatory quality gates pass.

| Quality Gate           | Status Required |
| ---------------------- | --------------- |
| Build                  | Pass            |
| Unit Checks            | Pass            |
| Playwright Smoke Tests | Pass            |
| Functional Regression  | Pass            |
| Responsive Tests       | Pass            |
| Accessibility Tests    | Pass            |
| Link Validation        | Pass            |
| Visual Regression      | Pass            |
| Lighthouse Performance | Pass            |
| Deployment             | Pass            |

---

# 7. Evidence Strategy

Each automated execution should publish evidence suitable for stakeholder review.

Evidence includes:

* Playwright HTML Report
* Screenshots
* Videos
* Trace Files
* Console Logs
* Accessibility Report
* Lighthouse Report
* GitHub Actions Results
* Deployment Status

---

# 8. Documentation Hierarchy

```
Business Requirements Specification (BRS)
                │
                ▼
Functional Requirements Specification (FRS)
                │
                ▼
Requirements Traceability Matrix (RTM)
                │
                ▼
Test Design Specification (TDS)
                │
                ▼
Master Test Case Specification
                │
                ▼
Playwright Test Suites
                │
                ▼
CI/CD Pipeline
                │
                ▼
Quality Dashboard
```

---

# 9. Portfolio Demonstration Value

This portfolio is intended not only to present professional experience, but also to demonstrate an end-to-end Quality Engineering approach. Every business capability is traceable through functional requirements, acceptance criteria, automated test cases, CI/CD execution, and deployment evidence. This provides a complete example of requirements engineering, quality assurance, test automation, and continuous verification comparable to documentation practices used in enterprise software delivery.
