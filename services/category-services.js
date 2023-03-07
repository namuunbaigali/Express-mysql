import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (
  categoryId,
  name,
  slug,
  productCount,
  parent_id,
  createdAt,
  updated,
  updateAt
) => {
  const [result] = await pool.query(
    `INSERT INTO category (categoryId,name, slug, productCount, parent_id,createdAt,updated,updateAt) VALUES (?,?,?,?,?,?,?,?)`,
    [
      categoryId,
      name,
      slug,
      productCount,
      parent_id,
      createdAt,
      updated,
      updateAt,
    ]
  );
  return result;
};

export const updateCategories = async (
  categoryId,
  name,
  slug,
  productCount,
  parent_id,
  createdAt,
  updated,
  updateAT
) => {
  const [result] = await pool.query(
    `UPDATE category set  name='${name}',slug='${slug}',productCount='${productCount}'parent_id='${parent_id}',createdAt='${createdAt}',updated='${updated}',updateAT='${updateAT}' where id=${categoryId}`
  );
  return result;
  s;
};

export const deleteCategories = async (id) => {
  const [result] = await pool.query(`select * from category where id=${id}`);
  return result;
};

export const sortCategories = async (id) => {
  const [result] = await pool.query(`SELECT * FROM category where id=${id}`);
  return result;
};
