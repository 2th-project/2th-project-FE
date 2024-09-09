const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./path/to/serviceAccountKey.json"); // 서비스 계정 키 파일 경로

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com", // DB URL 변경
});

const db = admin.firestore();

// JSON 데이터 파일 로드
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

// 데이터 Firestore에 업로드
const uploadData = async () => {
  const batch = db.batch();
  Object.keys(data).forEach((key) => {
    const docRef = db.collection("data").doc(key); // 컬렉션 이름: 'data'
    batch.set(docRef, data[key]);
  });
  await batch.commit();
  console.log("Data successfully uploaded to Firestore");
};

uploadData().catch((err) => {
  console.error("Error uploading data:", err);
});
