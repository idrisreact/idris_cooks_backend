import { Router } from "express";

export const tweetRoute = Router();

tweetRoute.post("/", (req, res) => {
  res.send("post user");
});
tweetRoute.get("/", (req, res) => {
  res.send("get list of users");
});

tweetRoute.get("/:id", (req, res) => {
  res.send("get a users");
});
tweetRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send("update a users");
});
tweetRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send("delete a users");
});
