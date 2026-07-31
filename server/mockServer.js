import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Portfolio Showcase</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#experience">Experience</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
        <a href="#telemetry">Telemetry</a>
      </nav>
    </header>
    <main>
      <section id="profile">
        <h1>Professional Profile</h1>
        <p>Experienced software engineer with a focus on quality engineering.</p>
      </section>
      <section id="experience">
        <h2>Career History</h2>
        <p>Delivered quality automation, architecture leadership, and reliable delivery.</p>
      </section>
      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <a href="/cv.pdf">Download CV</a>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <a href="https://github.com/example">GitHub</a>
        <a href="https://linkedin.com/in/example">LinkedIn</a>
        <a href="https://wa.me/1234567890">WhatsApp</a>
        <a href="mailto:example@example.com">Email</a>
      </section>
      <section id="telemetry">
        <h2>Telemetry Health</h2>
        <div>Build status: Healthy</div>
        <div>Last check: 2026-07-31</div>
      </section>
    </main>
  </body>
</html>`;

const server = http.createServer(async (req, res) => {
  const url = req.url ?? '/';

  if (url === '/cv.pdf') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    res.end('mock pdf content');
    return;
  }

  if (url === '/api/telemetry') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', build: 'passing' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Mock portfolio server running on http://127.0.0.1:3000');
});
