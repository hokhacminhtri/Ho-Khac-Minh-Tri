import * as dotenv from "dotenv";
import * as express from "express";
import sequelize from './database';
import routes from './routes/resourceRoutes';

dotenv.config()

const app = express.default();
const port = process.env.HTTP_PORT || 3000;

// Middleware
app.use(express.default.json());

// Routes
app.use("/api", routes);

// Health Check Endpoint
app.get("/healthz", (req: express.Request, res: express.Response) => {
  res.status(200).send({ message: "Healthz" });
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
