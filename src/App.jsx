import React from "react";
export default function App() {
  const buildType = import.meta.env.VITE_BUILD_TYPE || "Unknown Build";

  return (
    <main className="page">
      <section className="hero-card">
        <div className="badge">Docker Classroom Demo</div>
        <h1>Single-Stage vs Multi-Stage Build</h1>
        <h2>{buildType}</h2>

        <p className="intro">
          This tiny React/Vite app helps students understand how Docker builds an image and runs a container.
        </p>

        <div className="flow">
          <span>Dockerfile</span>
          <strong>→</strong>
          <span>Docker Image</span>
          <strong>→</strong>
          <span>Running Container</span>
        </div>

        <div className="grid">
          <article>
            <h3>Single-stage</h3>
            <p>Build and run inside the same Node.js image. Easy to understand, but heavier for production.</p>
          </article>
          <article>
            <h3>Multi-stage</h3>
            <p>Build with Node.js, then serve only the final static files from a clean NGINX image.</p>
          </article>
        </div>

        <footer>
          Teach point: Node.js is needed to build React, but NGINX is enough to serve the final files.
        </footer>
      </section>
    </main>
  );
}
