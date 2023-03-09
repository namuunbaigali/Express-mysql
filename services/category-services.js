import pool from "../config/mysql-config.js";
// npm i nanoid;
import { nanoid } from "nanoid";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const getCategory = async (categoryId) => {
  const [result] = await pool.query(
    "SELECT * FROM category where categoryId=?",
    categoryId
  );
  const category = result.length ? result[0] : null;
  return category;
};

export const deleteCategory = async (categoryId) => {
  try {
    await pool.query("DELETE FROM category WHERE categoryId=?", [categoryId]);
    return categoryId;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createCategory = async (cat) => {
  const id = nanoid();
  const [result] = await pool.query(
    `INSERT INTO category (categoryId ,name, slug, productCount,createdAt) 
                VALUES (?,?,?,?,?)`,
    [id, cat.name, cat.slug, cat.productCount, new Date()]
  );
  return result;
};

export const updateCategory = async (name, slug, productCount, categoryId) => {
  const params = [name, slug, productCount];
  console.log(params);
  try {
    const res = await pool.query(
      `update category set name=?, slug=?, productCount=?, createdAt=? where categoryId=?`,
      [name, slug, productCount, new Date(), categoryId]
    );
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};
