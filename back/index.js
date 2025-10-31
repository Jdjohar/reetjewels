// index.js (for Vercel deployment)
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./db');

// Import routes
const webhookRoute = require('./Routes/Webhook');
const authRoute = require('./Routes/Auth');

// Initialize app
const app = express();

// Connect to database (safe for serverless)
connectDB()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB connection error:', err));

// ---- MIDDLEWARE ----

// Serve static files (read-only in Vercel runtime)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS setup (whitelist)
const corsOptions = {
  origin: [
    "https://jewels-shop-ten.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "X-Requested-With", "Accept"],
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ---- ROUTES ----

// For webhook, use express.raw() if needed for signature verification
// Example: if using Stripe webhooks, do this in the route file
app.use('/webhook', webhookRoute);

app.use(express.json());
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('API running on Vercel');
});

// ---- EXPORT APP (no app.listen!) ----
module.exports = app;
