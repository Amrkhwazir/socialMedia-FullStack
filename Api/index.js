import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
app.use(cors())
dotenv.config();
const port = 8000;

const connect = () => {

    mongoose.connect(process.env.MONGO_URL)
     
    .then(() => {
        console.log(`connected to DB`);
      })
      .catch((err) => {
        throw err;
      });
  };

app.use("/images", express.static(path.join(__dirname, "public/images")))

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "public/images");
  },
  filename: ( req, file, cb) => {
    cb(null, req.body.name);
    console.log(req.body.name, "body name")
    console.log(req.file, "file name")
    console.log(file.originalname, "orignal name")
  }
});

const upload = multer({storage: storage});

app.post("/upload", upload.single("file"), (req,res) => {
try {
  return res.status(200).json("file uploaded successfully")
} catch (error) {
  console.log("data nhi mil rha");
}
})


app.use((req, res, next)=>{
    req.body.date = new Date()
    // console.log(req.body);
    next()
})

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/post", postRoutes);


app.listen(port, ()=>{
    console.log(`server chal gya port number ${port}`);
    connect();
}); 