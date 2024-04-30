import express from "express";
import fileUpload from "express-fileupload";
import MongoDB from "./src/infrastructure/database/MongoDB.js";
import Routes from "./src/infrastructure/routes/index.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

class Server {
  constructor() {
    this.app = express();
    this.port =  4000;
    this.middlewares();
    this.dataBase();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
    this.app.use(cookieParser());
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : './uploads'
    }));
  }

  async dataBase() {
    await MongoDB();
  }

  routes() {
    this.app.use(Routes);
  }

  listen() {
    this.app.listen(this.port, () => console.log("server running on port ", this.port));
  }
}

export default Server;
