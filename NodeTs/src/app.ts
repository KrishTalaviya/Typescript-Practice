import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import { Request, Response, NextFunction } from "express";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions)); // enable CORS for all routes
app.options("*", cors(corsOptions)); // handle preflight OPTIONS requests

app.use(express.json());
app.use("/products", productRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
