import express from "express";
import cors from "cors";

const app = express();

// Allow requests from your Vercel frontend
app.use(cors({
  origin: "https://react-portfolio-beta-taupe.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Your routes
app.post("/api/contact", (req, res) => {
  // handle contact submission
  res.json({ message: "Form submitted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
