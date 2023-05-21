const express = require('express');
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// Mongodb call
const db = require("./server").db();
const mongodb = require("mongodb");


// 1 Kirish Kodlar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session code


// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs")

// 4 Routing code
app.post("/create-item", (req,res) => {
    console.log('user entered / create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
})

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, (err, data) => {
        res.json({state: "Success"})
    })
})

app.post("/edit-item", (req,res) => {
    const data = req.body
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)}, 
        {$set: {reja: data.new_input}}, 
        (err, data) => {
            res.json({state: "Success"})
        })
})

app.post("/delete-all", (req,res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(() => {
            res.json({state: "All plans are deleted."})
        })
    }
})

app.get("/author", function(req,res) {
    res.render("author", {user: user})
})

app.get("/", (req,res) => {
    console.log('user entered /')
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong!");
        }else {
            res.render("reja", {items: data})
        }
    })
});


module.exports = app;
