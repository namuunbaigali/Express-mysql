import pool from "../config/mysql-config.js";
import { nanoid } from "nanoid";

export const getProduct = async () => {
  const [result] = await pool.query("SELECT * FROM product");
  return result;
};

export const createProduct = async (pro) => {
  const id = nanoid();
  const [result] = await pool.query(
    `INSERT INTO product (productId ,name, slug, description, imageUrl, text, price) 
                VALUES (?,?,?,?,?,?,?)`,
    [id, pro.name, pro.slug, pro.description, pro.imageUrl, pro.text, pro.price]
  );
  return result;
};

export const updateProduct = async (
  name,
  slug,
  description,
  imageUrl,
  text,
  price,
  productId
) => {
  const params = [name, slug, description, imageUrl, text, price];
  try {
    const res = await pool.query(
      `update product set name=?, slug=?, description=?, imageUrl=?,text=?,price=? where productId=?`,
      [name, slug, description, imageUrl, text, price, productId]
    );
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};
export const deleteProduct = async (productId) => {
  try {
    await pool.query("DELETE FROM product WHERE productId=?", [productId]);
    return productId;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const sortProduct = async (productId) => {
  const [result] = await pool.query(`SELECT * FROM product where productId=?`, [
    productId,
  ]);
  return result.length ? result[0] : null;
};
