import express from "express";
import {
  getCategories,
  createCategory,
  deleteCategories,
  sortCategories,
  updateCategories,
} from "../services/category-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/id", async (req, res) => {
  const { id } = req.body;
  try {
    const [result] = await sortCategories(id);
    res.json(result);
  } catch (err) {
    res.status(400).json(" sort hiij cadsangui");
  }
});

router.post("/", async (req, res) => {
  const { name, slug, imageUrl } = req.body;
  try {
    const result = await createCategory(name, slug, imageUrl);
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    const [result] = await deleteCategories(`DELETE FROM category where id=?`, [
      id,
    ]);
  } catch (err) {
    res.status(400).json(" Ustgaj cadsangui");
  }
});

router.put("/", async (req, res) => {
  const { id, name, slug, imageUrl } = req.body;
  try {
    const result = await updateCategories(name, slug, imageUrl, id);
    res.json(result);
  } catch (err) {
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
