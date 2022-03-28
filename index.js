const express = require("express");
const app = express();

const mongoose = require("mongoose");
const DB="mongodb+srv://AnandKumar:CHAURASIYA@cluster0.uxgsm.mongodb.net/LaundryServiceProject?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("connection successful");
}).catch((err)=>console.log(err));
//external middleware
const cors = require("cors");
app.use(cors());

//built-in middleware
app.use(express.json());

//user routes
app.use(require("./routes/auth"));

//orders routes
app.use("/order", require("./routes/orders"));

const PORT = process.env.PORT || 5000;

//creating server
app.listen(PORT, () => {
  console.log(`app is listing at port ${PORT}`);
});
