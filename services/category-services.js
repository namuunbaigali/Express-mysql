import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imageUrl) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imageUrl) VALUES (?,?,?)`,
    [name, slug, imageUrl]
  );
  return result;
};

export const updateCategories = async (name, slug, imageUrl, id) => {
  const [result] = await pool.query(
    `UPDATE category set name='${name}',slug='${slug}',imageUrl='${imageUrl}' where id=${id}`
  );
  return result;
};

export const deleteCategories = async (id) => {
  const [result] = await pool.query(`select * from category where id=${id}`);
  return result;
};

export const sortCategories = async (id) => {
  const [result] = await pool.query(`SELECT * FROM category where id=${id}`);
  return result;
};
