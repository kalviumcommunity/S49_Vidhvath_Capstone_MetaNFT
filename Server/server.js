const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql"
});

// Check if the backend is running
app.get("/status", (req, res) => {
    res.json({ status: "Backend is running" });
});

// GET all NFTs
app.get("/", (req, res) => {
    const sql = "SELECT * FROM nfts";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

// POST a new NFT
app.post("/", (req, res) => {
    const { name, owner, value } = req.body;
    const sql = "INSERT INTO nfts (name, owner, value) VALUES (?, ?, ?)";
    db.query(sql, [name, owner, value], (err, result) => {
        if (err) return res.json("Error");
        return res.json("NFT added successfully");
    });
});

// PUT to update an NFT by id
app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, owner, value } = req.body;
    const sql = "UPDATE nfts SET name = ?, owner = ?, value = ? WHERE id = ?";
    db.query(sql, [name, owner, value, id], (err, result) => {
        if (err) return res.json("Error");
        return res.json("NFT updated successfully");
    });
});

app.listen(8081, () => {
    console.log("Backend server is running on port 8081");
});
