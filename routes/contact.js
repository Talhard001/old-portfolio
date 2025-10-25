import express from 'express';
import fs from 'fs';
const router = express.Router();

// POST /api/contact — save contact
router.post('/', (req, res) => {
  const filePath = 'contacts.json';
  let contacts = [];

  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8').trim();
      if (data) contacts = JSON.parse(data);
    } else {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
  } catch (err) {
    console.error('Error reading or parsing contacts.json:', err.message);
    return res.status(500).json({ error: 'Server error reading contacts' });
  }

  contacts.push(req.body);

  try {
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    console.error('Error writing to contacts.json:', err.message);
    res.status(500).json({ error: 'Server error saving contact' });
  }
});

// ✅ GET /api/contact — fetch all contacts
router.get('/', (req, res) => {
  const filePath = 'contacts.json';
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const contacts = data ? JSON.parse(data) : [];
      res.json(contacts);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('Error reading contacts.json:', err.message);
    res.status(500).json({ error: 'Server error fetching contacts' });
  }
});

export default router;
