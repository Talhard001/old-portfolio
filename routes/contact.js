import express from "express";
import cors from "cors";
import contactRoutes from "./contact.js";

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(cors({
  origin: "https://react-portfolio-beta-taupe.vercel.app", // your Vercel frontend
  methods: ["GET", "POST"],
}));

// Routes
app.use("/api/contact", contactRoutes);

// Port (Railway sets process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
