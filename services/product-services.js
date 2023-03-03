import pool from "../config/mysql-config.js";

export const getProduct = async () => {
  const [result] = await pool.query("SELECT * FROM product");
  return result;
};

export const createProduct = async (name, slug, imageUrl, productCount) => {
  const [result] = await pool.query(
    `INSERT INTO product (name, slug, imageUrl,productCount) VALUES (?,?,?,?)`,
    [name, slug, imageUrl, productCount]
  );
  return result;
};

export const updateProduct = async (name, slug, imageUrl, id, productCount) => {
  const [result] = await pool.query(
    `UPDATE product set name='${name}',slug='${slug}',imageUrl='${imageUrl}', productCount='${productCount}' where id=${id}`
  );
  return result;
};

export const deleteProduct = async (id) => {
  const [result] = await pool.query(`delete from product where id=?`, [id]);
  return result.length ? result[0] : null;
};

export const sortProduct = async (id) => {
  const [result] = await pool.query(`SELECT * FROM product where id=?`, [id]);
  return result.length ? result[0] : null;
};
