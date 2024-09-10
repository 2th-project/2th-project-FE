const express = require("express");
const faunadb = require("faunadb");
const q = faunadb.query;
const app = express();
const port = 3001;

const client = new faunadb.Client({
  secret: "YOUR_FAUNADB_SECRET_KEY",
});

app.get("/api/java/detail/:id", (req, res) => {
  const { id } = req.params;
  res.json({ title: `제목 ${id}`, summary: `간단 설명 ${id}` });
});

app.get("/api/node/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query(
      q.Get(q.Ref(q.Collection("details"), id)),
    );
    res.json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch data from FaunaDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
