const express = require('express');
const app = express(); 
// user and serve html from this node js app
setInterval(() => {
    console.clear();
    console.log("PID:", process.pid);
    console.log("Memory Usage (MB):", (process.memoryUsage().rss / 1024 / 1024).toFixed(2));
    console.log("CPU Usage:", process.cpuUsage());
    console.log("Uptime (seconds):", process.uptime());
    //write this to a json file
    const fs = require('fs');   

}, 2000);


app.get('/getmon', (req, res) => {
    res.send(html)
});
