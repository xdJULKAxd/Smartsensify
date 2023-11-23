const sqlite3 = require('sqlite3');
const jwt = require('jsonwebtoken'); 

const express = require('express')
 var cors = require('cors') 
 var corsOptions = {
    origin: 'http://localhost:3000' // ADRES REACTA, CZYLI JAKI ADRES NASZE API MOŻE NASŁUCHIWAĆ
  }
const app = express()
app.use(express.json())
app.use(cors(corsOptions))
const port = 3001


const db = new sqlite3.Database('DataBase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

app.get('/sensors', async(req, res) => {
    const response = await fetch('https://smartsensify.onrender.com/api/sensors/');
    if (response.status === 200) {
      const data = await response.json();
      res.send(data)
    } else {
        res.status(400)
      res.send("Wystąpił błąd")
   }
})
app.get('/sensor/:id', async(req, res) => {
    const id = req.params.idd
    const response = await fetch(`https://smartsensify.onrender.com/api/sensors/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      res.send(data)
    } else {
        res.status(400)
        res.send("Wystąpił błąd")
   }
   
  })
  app.post('/sensors', (req, res) => {
   res.status(201)
   
  })
  app.post('/login', (req, res) => {
    db.all("SELECT * FROM Konta",(err, rows) => {
        console.log('rows', rows, 'err', err);
        for (let i=0; i<rows.length; i++){
            const row = rows[i]
            console.log('row', row)
            if ( row.Login  === req.body.login && row.Haslo === req.body.password){
                const token = jwt.sign(row.Login, "tajny sekretny klucz");
                res.status(200)
                res.json({token:token})
                console.log("znaleziono");
                return;
            }
        }
        res.status(404)
        res.json({error:"nie znaleziono uzytkownika"}) 
        console.log("nieznaleziono");
    })
})

app.listen(port, () => {
  console.log(`localhost ${port}`)
})
