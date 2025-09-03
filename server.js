const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/restroworks", { useNewUrlParser: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.get('/', (req, res) => res.send("Restro Works API running..."));

app.listen(5000, () => console.log("Server running on port 5000"));
