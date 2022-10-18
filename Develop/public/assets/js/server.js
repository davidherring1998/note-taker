const express = require('express');
const app = express();
const fs = require('fs');


// reads file 
app.get('/api/notes', (req, res) => {
    fs.readFile(__dirname + '/' + './db.json', 'utf8', (err, data) => {
        let notes = JSON.parse(data);
        res.send(notes);
        console.log('notes can be read');

    })
});

// replaces current notes
let noteTwo = {
    title: 'test two',
    note: 'test two'
}

let data = JSON.stringify(noteTwo);


fs.writeFile('./db.json', data, (err) => {
    if(err) throw (err);
    console.log('data is written to file')
})

// 
app.listen(3000, () => console.log('listening on port 3000'));


