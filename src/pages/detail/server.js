const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

const db = admin.firestore();
const app = express();

// 상세 데이터를 제공하는 API 엔드포인트
app.get("/detail/:id", async (req, res) => {
  const doc = await db.collection("data").doc(req.params.id).get();
  if (!doc.exists) {
    return res.status(404).send("No such document!");
  }
  res.send(doc.data());
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
