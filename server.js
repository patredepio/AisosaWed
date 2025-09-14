import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Handle React Router - serve index.html for all non-API routes
app.get("*rest", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Frontend served at http://localhost:${PORT}`);
});
