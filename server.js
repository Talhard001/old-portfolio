import express from "express";
import cors from "cors";                 // import first
import contactRoutes from "./routes/contact.js";

const app = express();                  // ← declare app BEFORE using it

// Middleware
app.use(cors());                        // now this works
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(5000, () => {
  console.log("✅ Server is running on port 5000");
});
