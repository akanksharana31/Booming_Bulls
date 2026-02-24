const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cloud DevOps Project</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          .card {
            background: rgba(0, 0, 0, 0.4);
            padding: 40px;
            border-radius: 10px;
            display: inline-block;
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background: #ff9800;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Cloud DevOps Deployment</h1>
          <p>Infrastructure as Code using Terraform</p>
          <p>Containerized with Docker</p>
          <p>CI/CD using GitHub Actions</p>

          <button onclick="checkHealth()">Check Health</button>
          <p id="health"></p>
        </div>

        <script>
          async function checkHealth() {
            const res = await fetch('/health');
            const data = await res.json();
            document.getElementById('health').innerText =
              "Status: " + data.status;
          }
        </script>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Healthy",
    timestamp: new Date(),
    version: "1.0.0"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
