const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log("db connection failed: ", error);
  });
