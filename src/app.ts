import cors from "cors";
import bodyParser from "body-parser";
import express, { Application } from "express";

// Import routes
import routes from "./routes";
const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/", routes);

export default app;
