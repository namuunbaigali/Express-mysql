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
  const { name, slug, description, imageUrl, text, price } = req.body;
  res.json(
    await createProduct({ name, slug, description, imageUrl, text, price })
  );
});

router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  res.json(await deleteProduct(productId));
});

router.put("/:productId", async (req, res) => {
  const { name, slug, description, imageUrl, text, price } = req.body;
  const { productId } = req.params;

  try {
    const result = await updateProduct(
      name,
      slug,
      description,
      imageUrl,
      text,
      price,
      productId
    );
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json("Update hiij cadsangui ");
  }
});

export default router;
