import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminroutes.js';




const app = express();

await connectDB();



//Middlewares


app.use(cors())
app.use(express.json());


// Routes

app.get("/",(req, res)=>{

    res.send("API is running...");

})

app.use('/api/admin',adminRouter)

 // Start the server

const PORT = process.env.PORT || 3000;


// Start the server 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


export default app;