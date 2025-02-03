require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const faqRoutes = require("./src/routes/faq.routes");
const adminRouter = require("./src/admin");

const app = express();

// Middleware
app.use(express.json());
app.use("/api/faqs", faqRoutes);
app.use(adminRouter);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
