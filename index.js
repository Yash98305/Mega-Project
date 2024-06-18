const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const errorMiddleware = require("./middlewares/error.js")
dotenv.config()

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const userRouter = require('./routers/userRouter.js');
app.use("/api/v1/user",userRouter)
const adminRouter = require('./routers/adminRouter.js');
app.use("/api/v1/admin",adminRouter)


app.get('/',(req,res)=>{
    res.send({
        message:"welcome to mega project"
    })
})

app.use(errorMiddleware);

module.exports = app;