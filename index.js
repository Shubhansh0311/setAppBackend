import express from 'express'
import cors from 'cors'
const app = express()
import hotspotRouter from './Routes/hotspotRouter.js'

import BluetoothRouter from './Routes/bluetoothRouter.js'
import wifiRouter from './Routes/WifiRouter.js'
import displayRouter from './Routes/displayRouter.js'
import aboutRouter from './Routes/aboutRouter.js'
import simRouter from './Routes/simRouter.js'
import soundRouter from './Routes/soundRouter.js'
import connectionRouter from './Routes/connectionRouter.js'

app.use(express.json())
// app.use(cors())
// // app.use(cors({ origin: 'https://new-settingapp.vercel.app' }));
// // app.options('*', cors()); 
const port = 800

const corsOptions = {
  origin: 'https://new-settingapp.vercel.app', // Replace with your React app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // If you want to include cookies in requests
};

app.use(cors(corsOptions));

// Preflight response for all routes
app.options('*', cors(corsOptions)); // This will handle preflight requests for all routes



// if data is from PortableHotspot
app.post("api/about/rename",(req,res)=>{
  res.json({message:"hiii suceecss"})
})
app.use('/hotspot', hotspotRouter)
app.use('/bluetooth', BluetoothRouter)
app.use('/wifi', wifiRouter)
app.use('/display', displayRouter)
app.use('/about', aboutRouter)
app.use('/sim', simRouter)
app.use('/sound', soundRouter)
app.use('/connection', connectionRouter)

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})
