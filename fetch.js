const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');


app.set('veiw engine','ejs');

mongoose.connect('mongodb+srv://Honey:f8zic9GUVGOmeNRL@cluster2.tksstvk.mongodb.net/eventManagement');

const notesSchema = {
    dates: String,
    times: String,
    club: String,
    event: String,
    description: String

}

const Conn = mongoose.model("Conn", notesSchema);

app.get('/', (req, res) => {
    Conn.find()
      .then(notes => {
        res.render('fetch.ejs', {
          formlist: notes
        });
      })
      .catch(err => {
        console.log('Error in fetching', err);
        res.send('Error in fetching data');
      });
  });
  
 
  app.get('/events', (req, res) => {
    Conn.find()
    .then((notes) => {
     res.render('events/events.ejs',{
          formlist: notes  
     });
    })
    .catch((err) => {
     console.log("error in fetching",err);
    });
 });


app.listen(4000,function(){
    console.log('server is running');
})