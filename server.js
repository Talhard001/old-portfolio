const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middlewares
app.use(cors({
  origin: "*", // Allow all origins (you can limit later to your frontend domain)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json()); // Parse JSON body

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is live and running on Railway!");
});

// ✅ Contact form route
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("📩 New Contact Form Submission:", { name, email, phone, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  // You can later integrate email service or database here
  res.status(200).json({ message: "Form submitted successfully!" });
});

// ✅ Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
