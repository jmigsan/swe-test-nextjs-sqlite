import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async (req, res) => {
  const { id } = req.query;
  const { method } = req;

  if (method === 'PUT') {
    console.log('hey');
    try {
      const db = await open({
        filename: './sqlite.db',
        driver: sqlite3.Database,
      });

      const data = await db.all(
        `UPDATE users SET money = money + 55 WHERE id = ${id}`
      );

      res.status(200).json(data);

      await db.close();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
