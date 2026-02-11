import React, { useState } from 'react';
import './App.css';

function App() {
  const [helloWorld, setHelloWorld] = useState('Hello World');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Agentic Demo Template</h1>
        <p>
          This is a starter template for agentic coding demos.
        </p>
        <p className="subtitle">
          Edit <code>src/App.js</code> and push to deploy automatically!
        </p>

        <div className="hello-world-field">
          <label htmlFor="hello-world-input">Hello World Field</label>
          <input
            id="hello-world-input"
            type="text"
            value={helloWorld}
            onChange={(event) => setHelloWorld(event.target.value)}
          />
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>🚀 Auto Deploy</h3>
            <p>Push to main branch and watch it deploy</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast Build</h3>
            <p>GitHub Actions builds in minutes</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global CDN</h3>
            <p>Azure Static Web Apps with worldwide reach</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
