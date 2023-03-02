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
    const [result] = await updateCategories({});
    res.json(result);
  } catch (err) {
    res.status(400).json(" sort hiij cadsangui");
  }

  res.json(result);

  router.post("/", async (req, res) => {
    const { name, slug, imgUrl } = req.body;
    try {
      res.json(await createCategory(name, slug, imgUrl));
    } catch (err) {
      res.status(400).json("Something went wrong");
    }
  });

  router.delete("/", async (req, res) => {
    const { id } = req.body;
    try {
      const [result] = await deleteCategories(
        `DELETE FROM category where id=?`,
        [id]
      );
    } catch (err) {
      res.status(400).json(" Ustgaj cadsangui");
    }
  });

  router.put("/", async (req, res) => {
    const { id, name, slug, imageUrl } = req.body;
    try {
      const [result] = await sortCategories(
        `UPDATE category set name=?, slug=?,imageUrl=? where id=?`,
        [name, slug, imageUrl, id]
      );
    } catch (err) {
      res.status(400).json("Update hiij cadsangui ");
    }
  });
});

export default router;
