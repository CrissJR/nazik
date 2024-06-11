import fileupload from "express-fileupload";
import express from "express";
import sequelize from "./db";
import "dotenv/config";
import router from "../routes/index";
import errorHandler from "../middleware/ErrorHandling";
import path from "path";

//routers
const app = express();
const PORT = 5050;
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "static")));
app.use(fileupload({}));
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server started on port", PORT));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();
