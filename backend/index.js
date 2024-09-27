require('dotenv').config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
// const AuthController = require("./Controllers/AuthControllers.js")

const {HoldingsModel} = require('./models/HoldingsModel');
const {PositionsModel} = require('./models/PositionsModel');
const {OrdersModel} = require('./models/OrdersModel');

const  PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;



app.use(bodyParser.json());

app.use(
    cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
  }));

  app.use(cookieParser());
  app.use(express.json());
  app.use("/", authRoute);

app.get('/allHoldings', async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async(req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved");
});

app.listen(PORT, () => {
    console.log("Server is listening to port 3000");
    mongoose.connect(uri);
    console.log("Db Connected");
});