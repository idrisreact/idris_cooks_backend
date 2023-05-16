import express, { Application, Request, Response, NextFunction } from "express";
import { userRouter } from "./routes";
import { AppError } from "./types";

const app: Application = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("hello world ");
});

app.use("/api/user", userRouter);

app.use((req, res, next) => {
  const error = new AppError("Endpoint not found", 404);
  next(error);
});

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
