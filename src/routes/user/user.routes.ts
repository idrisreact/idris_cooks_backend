import { Router } from "express";

export const userRouter = Router();

userRouter.post("/", (req, res) => {
  res.send("post user");
});
userRouter.get("/", (req, res) => {
  res.send("get list of users");
});

userRouter.get("/:id", (req, res) => {
  res.send("get a users");
});
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send("update a users");
});
userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send("delete a users");
});
