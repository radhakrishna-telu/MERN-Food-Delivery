import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://mikasa:********@mikasa.3bjzu.mongodb.net/food-del")
    .then(() => console.log("DB connected"));
};
