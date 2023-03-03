import express from "express";
import {
  getProduct,
  createProduct,
  deleteProduct,
  sortProduct,
  updateProduct,
} from "../services/product-services.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getProduct());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await sortProduct(id));
});

router.post("/", async (req, res) => {
  const { name, slug, imageUrl, productCount } = req.body;
  try {
    const result = await createProduct(name, slug, imageUrl, productCount);
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteProduct(id));
});

router.put("/", async (req, res) => {
  const { id, name, slug, imageUrl, productCount } = req.body;
  try {
    const result = await updateProduct(name, slug, imageUrl, id, productCount);
    res.json(result);
  } catch (err) {
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
