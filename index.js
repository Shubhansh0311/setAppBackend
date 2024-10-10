import express from 'express';
import cors from 'cors';
import hotspotRouter from './Routes/hotspotRouter.js';
import BluetoothRouter from './Routes/bluetoothRouter.js';
import wifiRouter from './Routes/WifiRouter.js';
import displayRouter from './Routes/displayRouter.js';
import aboutRouter from './Routes/aboutRouter.js';
import simRouter from './Routes/simRouter.js';
import soundRouter from './Routes/soundRouter.js';
import connectionRouter from './Routes/connectionRouter.js';

const app = express();
const port = 800;

// CORS Options
// const corsOptions = {
//     origin: 'https://new-settingapp.vercel.app', // Your React app URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//     credentials: true, // Include cookies in requests if needed
// };

// app.options('*', cors(corsOptions)); // Handle preflight requests
// app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

// POST route
app.post("/api/about/rename", (req, res) => {
    res.json({ message: "hiii success" });
});
app.get("/test",(req,res)=>{
    console.log("success");
    
    res.json({message:"api working properly"})
})

// Use routers
app.use('/hotspot', hotspotRouter);
app.use('/bluetooth', BluetoothRouter);
app.use('/wifi', wifiRouter);
app.use('/display', displayRouter);
app.use('/about', aboutRouter);
app.use('/sim', simRouter);
app.use('/sound', soundRouter);
app.use('/connection', connectionRouter);

// Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });
