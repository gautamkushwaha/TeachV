import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://gunturharsha13:WHAI2pX967WEAbvy@cluster0.ojbo9v6.mongodb.net/",
      { dbName: "EdPark" }
    )
    .then(() => {
      console.log("connected to database successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default ConnectDB;
