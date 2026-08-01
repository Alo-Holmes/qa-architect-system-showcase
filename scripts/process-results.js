import fs from 'node:fs';
import path from 'node:path';

const RESULTS_PATH = path.join(process.cwd(), 'test-results', 'results.json');

async function processResults() {
  if (!fs.existsSync(RESULTS_PATH)) {
    console.error('Error: results.json not found at', RESULTS_PATH);
    process.exit(1);
  }

  const results = JSON.parse(fs.readFileSync(RESULTS_PATH, 'utf-8'));
  const stats = results.stats;
  const failures = [];

  // Helper to traverse suites and find failures
  function findFailures(suites) {
    for (const suite of suites) {
      if (suite.specs) {
        for (const spec of suite.specs) {
          for (const test of spec.tests) {
            for (const result of test.results) {
              if (result.status === 'failed' || result.status === 'timedOut') {
                failures.push({
                  title: spec.title,
                  file: spec.file,
                  line: spec.line,
                  error: result.error?.message,
                  stack: result.error?.stack,
                  stdout: result.stdout,
                  stderr: result.stderr
                });
              }
            }
          }
        }
      }
      if (suite.suites) {
        findFailures(suite.suites);
      }
    }
  }

  findFailures(results.suites);

  if (failures.length > 0) {
    console.log('\n--- AI SMART TRIAGE: FAILURE DETECTED ---');
    const report = generateBugReport(failures, stats);
    if (!fs.existsSync('test-results')) {
      fs.mkdirSync('test-results');
    }
    fs.writeFileSync('test-results/ai-bug-report.md', report);
    console.log(report);
    console.log('\n--- END OF TRIAGE REPORT ---');
    process.exit(1);
  } else {
    console.log('\n--- TELEMETRY PACKAGING: ALL TESTS PASSED ---');
    const telemetry = {
      timestamp: new Date().toISOString(),
      duration_ms: stats.duration,
      total_tests: stats.expected,
      passed: stats.expected,
      environment: process.env.CI ? 'CI' : 'Local'
    };
    console.log('Packaging telemetry for portfolio ingest API:');
    console.log(JSON.stringify(telemetry, null, 2));
  }
}

function stripAnsi(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\x1B\[[0-9;]*[JKmsu]/g, '');
}

function generateBugReport(failures, stats) {
  let report = `# 🤖 AI Smart Triage Report\n\n`;
  report += `**Status:** Pipeline Failed ❌\n`;
  report += `**Total Duration:** ${(stats.duration / 1000).toFixed(2)}s\n`;
  report += `**Failed Tests:** ${failures.length}\n\n`;

  failures.forEach((fail, index) => {
    const cleanError = stripAnsi(fail.error || '');
    report += `### Failure ${index + 1}: ${fail.title}\n`;
    report += `- **Location:** \`${fail.file}:${fail.line}\`\n`;
    report += `- **Root Cause Analysis (AI Generated):**\n`;
    
    if (cleanError.includes('expect(received).toMatch(expected)')) {
      report += `  - **Type:** Content Match Failure\n`;
      report += `  - **Analysis:** The test expected a specific pattern in the page content but found a mismatch. This usually indicates the UI content has changed or the mock data is inconsistent with the test expectations.\n`;
    } else if (cleanError.includes('timeout')) {
      report += `  - **Type:** Timeout\n`;
      report += `  - **Analysis:** The test timed out waiting for an element or condition. This could be due to performance degradation, a network issue, or a missing element.\n`;
    } else {
      report += `  - **Type:** Unexpected Error\n`;
      report += `  - **Analysis:** An unexpected error occurred during test execution. Review the stack trace below for details.\n`;
    }

    report += `\n#### Error Message\n\`\`\`\n${cleanError}\n\`\`\`\n`;
    if (fail.stack) {
      report += `\n#### Stack Trace\n\`\`\`\n${stripAnsi(fail.stack)}\n\`\`\`\n`;
    }
    report += `---\n`;
  });

  return report;
}

processResults().catch(err => {
  console.error('Fatal error in results processing:', err);
  process.exit(1);
});
