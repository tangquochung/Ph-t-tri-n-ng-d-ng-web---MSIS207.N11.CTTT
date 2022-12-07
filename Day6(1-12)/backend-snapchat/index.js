import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Messages from "./config.js";
import Pusher from "pusher";

// App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://test:sPoHBSD0nXYLx5nM@test.z6kobm1.mongodb.net/lab";

const pusher = new Pusher({
  appId: "1516531",
  key: "d2cde7e86ede0e0e0ba5",
  secret: "4c1149495703ec3b558c",
  cluster: "ap2",
  useTLS: true,
});

//Middleware
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API endpoints
const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connect");
  const msgCollection = db.collection("messagingmessages");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Err triggerring Pusher");
    }
  });
});

app.get("/", (req, res) => res.status(200).send("Hello uit guys"));
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
