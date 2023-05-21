const http = require('http');
const mongodb = require("mongodb");


let db;
const connectString =  'mongodb+srv://david:hqJkYidorkwEUnef@cluster0.s7p8pde.mongodb.net/Reja?retryWrites=true&w=majority'

mongodb.connect(connectString, 
    {
        useNewUrlParser:true, 
        useUnifiedTopology: true,
    }, (err, client) => {
        if(err) console.log("Error:", err);
        else {
            console.log("Mongodb connection succed")
            module.exports = client;
            const app = require('./app');
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3020;
            server.listen(PORT, function() {
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`)
            })
        }
})

