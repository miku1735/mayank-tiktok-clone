import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";
import Data from "./data.js";

//app config
const app = express();
const port = 9000;
//middlewares

app.use(express.json());
//DB config
const connection_url =
  "mongodb+srv://tiktok:kotoNfLuOfIFvMwT@cluster0.xae9x.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoint
app.get("/", (req, res) => res.status(200).send("Hello world"));
app.get("/v1/post", (req, res) => res.status(200).send(Data));
app.post("/v2/post", (req, res) => {
  // Post request is to add a video doc in videos collection
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));

// password:=kotoNfLuOfIFvMwT
