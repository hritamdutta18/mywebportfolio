const express = require('express');
const path = require('path');
const fs = require("fs"); 
const app = express();

const PORT = process.env.PORT || 3000;

// Serving the home page
app.get('/', (req, res) => {
    const indexPath  = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err)            
            return console.error('Error during file reading', err);

        // inject meta tags
        htmlData = htmlData
            .replace(/__TITLE__/g, "Hritam Dutta")
            .replace(/__DESCRIPTION__/g, "Welcome to my web portfolio !")
        
        res.send(htmlData);
    });
});

// Serving the about page
app.get('/about', (req, res) => {
    const indexPath  = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err)            
            return console.error('Error during file reading', err);

        // inject meta tags
        htmlData = htmlData
            .replace(/__TITLE__/g, "About - Hritam Dutta")
            .replace(/__DESCRIPTION__/g, "I am a student @ VIT Vellore & a Web Developer.")
        
        res.send(htmlData);
    });
});

// Serving the projects page
app.get('/projects', (req, res) => {
    const indexPath  = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err)            
            return console.error('Error during file reading', err);

        // inject meta tags
        htmlData = htmlData
            .replace(/__TITLE__/g, "Projects - Hritam Dutta")
            .replace(/__DESCRIPTION__/g, "Listed here are my projects.")
        
        res.send(htmlData);
    });
});

// Serving the skills page
app.get('/skills', (req, res) => {
    const indexPath  = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err)            
            return console.error('Error during file reading', err);

        // inject meta tags
        htmlData = htmlData
            .replace(/__TITLE__/g, "Skills - Hritam Dutta")
            .replace(/__DESCRIPTION__/g, "Not much but its honest work, my skillset !")
        
        res.send(htmlData);
    });
});

// Serving the education & experience page
app.get('/education-experience', (req, res) => {
    const indexPath  = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err)            
            return console.error('Error during file reading', err);

        // inject meta tags
        htmlData = htmlData
            .replace(/__TITLE__/g, "Education & Experience - Hritam Dutta")
            .replace(/__DESCRIPTION__/g, "My education & work experience till date.")
        
        res.send(htmlData);
    });
});

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, './build')));

// Port Listening ...
app.listen(PORT, (error) => {
    if (error) 
        return console.log('Error during app startup', error);
    
    console.log("Server listening on port " + PORT + "...");
});