import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async (req, res) => {
  try {
    const db = await open({
      filename: './sqlite.db',
      driver: sqlite3.Database,
    });

    const data = await db.all('SELECT * FROM users');
    console.log(data);

    res.status(200).json(data);

    await db.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
