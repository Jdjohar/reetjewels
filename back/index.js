// index.js
const express = require('express');
const path = require('path');
const connectDB = require('./db');

// Import routes
const webhookRoute = require('./Routes/Webhook');
const authRoute = require('./Routes/Auth');

const app = express();

// ✅ Connect to MongoDB (safe for Vercel serverless)
(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
})();

// ✅ Static files (read-only on Vercel)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Manual CORS setup (handles multiple domains properly)
const allowedOrigins = [
  "https://reetjewels-zhk2.vercel.app",
  "https://reetjewels.vercel.app",
  "http://localhost:5173"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Routes
app.use('/webhook', webhookRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('✅ API running on Vercel');
});

// ✅ Global error handler (always return JSON)
app.use((err, req, res, next) => {
  console.error('🔥 API Error:', err.stack || err.message);
  res.status(500).json({ error: 'Server Error', details: err.message });
});

// ✅ Export for Vercel (no app.listen)
module.exports = app;
