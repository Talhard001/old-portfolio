import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form received:", { name, email, message });

  // Normally yahan database ya email send hota hai.
  res.status(200).json({ success: true, message: "Form submitted successfully!" });
});

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
