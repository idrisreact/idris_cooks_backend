import express, { Application } from "express";
import { userRouter } from "./routes";

const app: Application = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("hello world dsfsfsfs");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
