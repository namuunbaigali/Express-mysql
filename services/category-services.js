import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imgUrl) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imgUrl) VALUES (?,?,?)`,
    [name, slug, imgUrl]
  );
  return result;
};

export const updateCategories = async (name, slug, imageUrl, id) => {
  const [result] = await pool.query(
    `update category set name=${name},slug=${slug},imageUrl=${imageUrl} where id=${id}`
  );
  return result;
};

export const deleteCategories = async () => {
  const [result] = await pool.query(`select * from category where id=${id}`);
  return result;
};

export const sortCategories = async () => {
  const [result] = await pool.query(`SELECT * FROM category where id=${id}`);
  return result;
};
