import pool from "../config/mysql-config.js";
// npm i nanoid;
import { nanoid } from "nanoid";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const getCategory = async (id) => {
  const [result] = await pool.query("SELECT * FROM user where catgeoryId=?", [
    id,
  ]);
  const category = result.length ? result[0] : null;
  return category;
};

export const deleteCategory = async (id) => {
  try {
    await pool.query("DELETE FROM user WHERE categoryId=?", [id]);
    return id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createCategory = async (category) => {
  const id = nanoid();
  try {
    await pool.query(
      `INSERT INTO user (categoryId, name, slug, productCount,createdAt) 
                VALUES (?,?,?,?,?)`,
      [
        id,
        category.name,
        category.slug,
        category.productCount,
        category.parent_id,
        new Date(),
      ]
    );
    const result = await getCategory(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateCategory = async (category) => {
  const params = [
    category.name,
    category.slug,
    category.productCount,
    category.parent_id,
    new Date(),
    category.categoryId,
  ];
  console.log(params);
  try {
    const res = await pool.query(
      `update user set name=?, slug=?, productCount=?, parent_id=?, createdAt=? where categoryId=?`,
      params
    );
    console.log(res);
    const result = await getCategory(category.categoryId);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};
