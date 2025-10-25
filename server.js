import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Step 1: Add proper CORS setup
app.use(
  cors({
    origin: "https://react-portfolio-beta-taupe.vercel.app", // your frontend URL
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false, // set to true only if using cookies/auth
  })
);

// ✅ Step 2: Handle preflight requests manually (optional but safe)
app.options("*", cors());

// ✅ Step 3: Enable JSON parsing
app.use(express.json());

// ✅ Step 4: Routes
app.get("/", (req, res) => {
  res.send("Hello from Railway backend!");
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  console.log("📩 New message received:", req.body);

  res.status(200).json({ message: "Message sent successfully!" });
});

// ✅ Step 5: Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
