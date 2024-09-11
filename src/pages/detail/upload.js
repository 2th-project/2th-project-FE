const faunadb = require("faunadb");
const fs = require("fs");
const q = faunadb.query;

// FaunaDB 클라이언트 설정
const client = new faunadb.Client({
  secret: "YOUR_FAUNADB_SECRET_KEY",
});

// JSON 데이터 파일 로드
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

// 데이터 FaunaDB에 업로드
const uploadData = async () => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const doc = {
        data: data[key],
      };
      try {
        const response = await client.query(
          q.Create(q.Collection("details"), doc),
        );
        console.log("Document created:", response.ref.id);
      } catch (error) {
        console.error("Error creating document:", error);
      }
    }
  }
  console.log("Data successfully uploaded to FaunaDB");
};

uploadData().catch((err) => {
  console.error("Error uploading data:", err);
});
