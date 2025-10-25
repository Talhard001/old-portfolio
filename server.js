import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "https://react-portfolio-beta-taupe.vercel.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Railway backend!");
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  console.log("📩 New message received:", req.body);

  res.status(200).json({ message: "Message sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
