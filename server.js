const express = require('express');
const app = express();
const http = require('http');

// 1 Kirish Kodlar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session code


// 3 Views code
app.set("views", "views");
app.set("veiw engine", "ejs")

// 4 Routing code
app.get("/", function(req,res) {
    res.end("HELLO WORLD")
});

app.get("/gift", function(req,res) {
    res.end("Siz sovgalar bolimidasiz")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`)
})