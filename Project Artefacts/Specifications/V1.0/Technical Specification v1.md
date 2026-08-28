✦ Business Requirements Specification (BRS): Portfolio Site

  As a Senior Quality Solutions Architect, I have analyzed the provided Astro/Tailwind codebase. This BRS documents the core functional requirements based
  exclusively on the current implementation.

  ---

  1. High-Value User Journeys (Scope)

   1. Telemetry Health Monitoring: User views real-time status of critical CI/CD pipelines.
   2. Professional Profile Discovery: User consumes core identity, experience, and testimonial content.
   3. CV Retrieval: User downloads the professional CV asset.
   4. Social/Professional Networking: User navigates to external professional profiles.

  ---

  2. Functional Specifications & Acceptance Criteria

  Journey 1: Telemetry Health Monitoring
  Goal: Provide users with transparent, near-real-time visibility into the health of associated automation test suites.

   * Functional Spec:
       * System fetches build status from GitHub API (getPipelinesTelemetry) at build-time.
       * Displays 3 status types: Passing (Green), Failing (Rose), Offline (Neutral/Unknown).
       * Provides links to the latest CI run.
   * Acceptance Criteria:
       * Data State: If GitHub API returns 403 or no valid runs, status MUST display as Offline with runUrl set to #.
       * Rendering Boundary: Telemetry cards MUST render within the TelemetryCard component grid.
       * Responsive: Grid MUST adapt from 1 column (mobile) to 3 columns (desktop md breakpoint).
       * UI/UX: Passing status MUST feature an animate-ping indicator on the status dot.

  Journey 2: Professional Profile Discovery
  Goal: Communicate professional credentials through a structured, responsive "Bento Grid" layout.

   * Functional Spec:
       * Hero section displays branding, title, and location.
       * Skills matrix categorizes expertise into defined groups (Testing, Automation, API, DevOps, etc.).
       * Experience grid displays chronological career history.
   * Acceptance Criteria:
       * Responsiveness: Bento grid items MUST utilize md:col-span-n classes to maintain aesthetic integrity across breakpoints (sm, md, lg).
       * Boundary: Skills MUST render within mapped flex-containers; excessive text in skill tags MUST NOT break layout containment.

  Journey 3: CV Retrieval
  Goal: Enable users to download the professional CV directly.

   * Functional Spec:
       * Provides a direct download link for the PDF document hosted in /docs/.
   * Acceptance Criteria:
       * Mechanism: Anchor tag MUST include download attribute to force file prompt rather than navigation.
       * UI Boundary: The button MUST render in the header section, maintaining contrast with the background via indigo-600/10 Tailwind classes.

  Journey 4: Social/Professional Networking
  Goal: Provide secure, reliable navigation to external professional platforms.

   * Functional Spec:
       * Links to LinkedIn, GitHub, and WhatsApp.
   * Acceptance Criteria:
       * Security: All links MUST include target="_blank" and rel="noopener noreferrer" to prevent security vulnerabilities and tab hijacking.
       * Hover Interaction: Links MUST demonstrate a translate-x-0.5 effect on hover, confirming interactivity to the user.

  ---

  3. Technical Implementation Notes
   * Build-time constraints: The Telemetry monitor depends on the GITHUB_TOKEN environment variable. If missing, the component defaults to Offline state safely.
   * Framework: Built on Astro with Tailwind CSS. UI components (BentoCard, TelemetryCard) are modular and reuse state-based styling constants.