import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} from "../services/category-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategory(id));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteCategory(id));
});

router.post("/", async (req, res) => {
  const { name, slug, productCount } = req.body;
  res.json(
    await createCategory({
      name,
      slug,
      productCount,
    })
  );
});

router.put("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const { name, slug, productCount } = req.body;
  try {
    const result = await updateCategory({
      categoryId,
      name,
      slug,
      productCount,
    });
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
