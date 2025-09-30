const express = require('express')
const app = express()
const veihcleRoute = require('./src/routes/VehicleRoutes')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(veihcleRoute)
app.set('view engine', 'ejs')
app.set('views', './src/views/')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})