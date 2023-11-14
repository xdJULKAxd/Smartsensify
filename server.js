const express = require('express')
 var cors = require('cors') 
 var corsOptions = {
    origin: 'http://localhost:3000' // ADRES REACTA, CZYLI JAKI ADRES NASZE API MOŻE NASŁUCHIWAĆ
  }
const app = express()
app.use(cors(corsOptions))
const port = 3001


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

app.listen(port, () => {
  console.log(`localhost ${port}`)
})