// index.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./db');

// Import routes
const webhookRoute = require('./Routes/Webhook');
const authRoute = require('./Routes/Auth');

const app = express();

// ---- Database ----
(async () => {
  try {
    await connectDB();
    console.log('✅ Database connected');
  } catch (err) {
    console.error('❌ DB connection error:', err.message);
  }
})();

// ---- Middleware ----
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const corsOptions = {
  origin: [
    "https://reetjewels-zhk2.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "X-Requested-With", "Accept"],
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

// ---- Routes ----
app.use('/webhook', webhookRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => res.send('✅ API running on Vercel'));

// ---- Export app ----
module.exports = app;
