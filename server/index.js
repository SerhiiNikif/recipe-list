import 'dotenv/config';
import mongoose from "mongoose";
import app from "./src/app.js";

const PORT = process.env.PORT || 4200;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log(`Succesfull connected`))
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
