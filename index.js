import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import helmet from 'helmet';


dotenv.config();
 const app = express();



 app.use(express.json());
 app.use(helmet()); 
 app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
 console.log(process.env.MONGO_URL)
 const PORT = process.env.PORT || 6001;
 mongoose 
   .connect(process.env.MONGO_URL)
   .then(() => {
     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
 
     /* ADD DATA ONE TIME */
     // User.insertMany(users);
     // Post.insertMany(posts);
   })
   .catch((error) => console.log(`${error} did not connect`));



































