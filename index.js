const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// Crear servidor
const app = express()

// Conectar a la BD
conectarDB()

console.log('Comenzando NodeSend')

// Habilitar CORS
const opcionesCors = {
    origin: 'https://cliente-pi.vercel.app'
}
app.use( cors(opcionesCors) )
// Puerto de la app
const port = process.env.PORT || 4000

// Habilitar lectura de valores de un body
app.use ( express.json() )

// Habilitar carpeta publica
app.use( express.static('uploads'))

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/enlaces', require('./routes/enlaces'))
app.use('/api/archivos', require('./routes/archivos'))

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})