const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const categoryRoutes = require('./routes/categoryRoutes');
const path = require("path");
const collectionRoutes = require('./routes/collectionRoutes');



dotenv.config();


const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use("/api/categories", categoryRoutes);
app.use("/api/payment", require("./routes/paymentRoutes"));
// Use category routes
app.use('/api/categories', categoryRoutes); 
app.use('/api/collections', collectionRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/JwelleryHaven", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB connected"))
.catch(err => console.error(" MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
