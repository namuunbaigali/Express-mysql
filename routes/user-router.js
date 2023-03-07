import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getUsers());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUser(id));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});

router.post("/", async (req, res) => {
  const { firstName, lastName, birthDate, email, phone, password, imageUrl } =
    req.body;
  res.json(
    await createUser({
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      password,
      imageUrl,
    })
  );
});

router.put("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, birthDate, email, phone, password, imageUrl } =
    req.body;
  try {
    const result = await updateUser({
      userId,
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      password,
      imageUrl,
    });
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
