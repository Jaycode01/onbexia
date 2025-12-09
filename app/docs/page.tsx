import "./docs.css";

function Documentation() {
  return (
    <div className="doc-container">
      <nav className="toc">
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
              <li>
                <a href="#installation">Installation</a>
              </li>
              <li>
                <a href="#setup">Setup</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#core-concepts">Core Concepts</a>
          </li>
        </ul>
      </nav>

      <main className="content">
        <h1 id="introduction">Introduction</h1>
        <p>Welcome to the documentation.</p>

        <h2 id="getting-started">Getting Started</h2>
        <p>Follow these steps to get started.</p>

        <h3 id="installation">Installation</h3>
        <pre>
          <code>npm install your-package</code>
        </pre>

        <h3 id="setup">Setup</h3>
        <p>Configure your project.</p>

        <h2 id="core-concepts">Core Concepts</h2>
        <p>Key concepts explained here.</p>
      </main>
    </div>
  );
}

export default Documentation;
